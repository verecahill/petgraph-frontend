import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, LOCAL_LOG_IN } from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstname = useInput("");
  const lastname = useInput("");
  const secret = useInput("");
  const email = useInput("");
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value
    }
  });

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
      variables: {
        email: email.value,
        secret: secret.value,
      }
  })

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN)

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const { data: {requestSecret} } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("You don't have an account yet.");
          }else {
            toast.success("Check your inbox for your login secret");
            setAction("confirm");
          }
        } catch (err) {
          toast.error("Can't request secret, try again");
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        firstname.value !== "" &&
        lastname.value !== ""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();

          if (!createAccount) {
            toast.error("Can't create account");
          } else {
            toast.success("Account created, login now");
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All field are required");
      }
    } else if (action==="confirm"){
        if(secret.value !== ""){
            try{
                const { data: {confirmSecret:token }} = await confirmSecretMutation();
                console.log(token);
                if(token !== "" && token !== undefined){
                    localLogInMutation({variables: {token}});
                }else {
                    throw Error();
                }
            } catch {
                toast.error("Can't confirm secret, check again")
            }
        }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstname={firstname}
      lastname={lastname}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
