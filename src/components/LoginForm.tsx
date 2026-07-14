'use client'
import {useAuth} from "@/hooks/useAuth";
import { zodResolver } from '@hookform/resolvers/zod';
import {loginSchema, type LoginFormData} from "@/api/validations/auth";
import {useForm} from "react-hook-form";
import {useCallback} from "react";

import type { UseFormRegister, FieldError } from 'react-hook-form';

type FormInputProps = {
	label: string;
	type: string;
	name: keyof LoginFormData;          // now only "email" | "password"
	placeholder?: string;
	register: UseFormRegister<LoginFormData>;
	errors: Partial<Record<keyof LoginFormData, FieldError>>;  // same as before
};

const FormInput = ({
					   label,
					   type,
					   name,
					   placeholder,
					   register,
					   errors,
					   ...props
				   }: FormInputProps) => {
	return (
		<div className="_social_login_form_input _mar_b14">
			<label className="_social_login_label _mar_b8">{label}</label>
			<input
				type={type}
				className="form-control _social_login_input"
				placeholder={placeholder}
				{...register(name)}
				{...props}
			/>
			{errors[name] && (
				<small className="text-danger">{errors[name]?.message}</small>
			)}
		</div>
	);
};

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
	
	const onSubmit = useCallback((data: LoginFormData) => {
		console.log('Form submitted with:', data);
		login(data);
	}, [login]);
	
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="_social_login_form">
			<div className="row">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<FormInput
						label="Email"
						type="email"
						name="email"
						placeholder="Enter your email"
						register={register}
						errors={errors}
					/>
				</div>
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<FormInput
						label="Password"
						type="password"
						name="password"
						placeholder="Enter your password"
						register={register}
						errors={errors}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
					<div className="form-check _social_login_form_check">
						<input
							className="form-check-input _social_login_form_check_input"
							type="checkbox"
							name="rememberMe"
							defaultChecked={true}
						/>
						<label className="form-check-label _social_login_form_check_label"
						       htmlFor="flexDefaultCheck1">Remember me</label>
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