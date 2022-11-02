export const validate = data => {
    const errors = {};
    if(!data.name.trim()){
        errors.name = "کاربر گرامی ورود نام اجباری می باشد.";
    }else{
        delete errors.name;
    }
    if(!data.email.trim()){
        errors.email = "کاربر گرامی ورود ایمیل اجباری می باشد.";
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
       errors.email = "کاربر گرامی ایمیل وارد شده نامعتبر می باشد.";
    }else{
        delete errors.email;
    }
    if(!data.password.trim()){
        errors.password = "کاربر گرامی ورود کلمه عبور اجباری می باشد.";
    }else if (data.password.length <= 7) {
         errors.password = "کاربر گرامی برای کلمه عبور حداقل ۸ کاراکتر وارد نمایید.";
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])/.test(data.password)){
         errors.password = "کاربر گرامی کلمه عبور باید شامل حروف [a-z],[A-Z],[0-9],[!@#$%^&*_=+-] باشد.";
    } else {
      delete errors.password;
    }
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "کاربر گرامی ورود تکرار کلمه عبور اجباری می باشد.";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword =
        "کاربر گرامی کلمه عبور و تکرار کلمه عبور برابر نمی باشند..";
    } else {
      delete errors.confirmPassword;
    }
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "کاربر گرامی پذیرفتن قوانین و مقررات اجباری می باشد.";
    }
    return errors;
}