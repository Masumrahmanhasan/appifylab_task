'use client'
import {useAuth} from "@/hooks/useAuth";
import { zodResolver } from '@hookform/resolvers/zod';
import {loginSchema, type LoginFormData} from "@/api/validations/auth";
import {useForm} from "react-hook-form";


export function LoginForm() {
	const { login, isLoginPending } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	
	const onSubmit = (data: LoginFormData) => {
		login(data);
	};
	
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="_social_login_form">
			<div className="row">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div className="_social_login_form_input _mar_b14">
						<label className="_social_login_label _mar_b8">Email</label>
						<input type="email" className="form-control _social_login_input" {...register('email')}/>
						{errors.email && (
							<small className="text-danger">{errors.email.message}</small>
						)}
					</div>
				</div>
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div className="_social_login_form_input _mar_b14">
						<label className="_social_login_label _mar_b8">Password</label>
						<input type="password" className="form-control _social_login_input" {...register('password')}/>
						{errors.password && (
							<small className="text-danger">{errors.password.message}</small>
						)}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
					<div className="form-check _social_login_form_check">
						<input className="form-check-input _social_login_form_check_input"
						       type="radio" name="flexRadioDefault" id="flexRadioDefault2"
						       defaultChecked={true} />
						<label className="form-check-label _social_login_form_check_label"
						       htmlFor="flexRadioDefault2">Remember me</label>
					</div>
				</div>
				<div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
					<div className="_social_login_form_left">
						<p className="_social_login_form_left_para">Forgot password?</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
					<div className="_social_login_form_btn _mar_t40 _mar_b60">
						<button type="submit" className="_social_login_form_btn_link _btn1"
						        disabled={isLoginPending}
						>
							{isLoginPending ? 'Logging in' : 'Login now'}
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}