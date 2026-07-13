import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import {LoginForm} from "@/components/LoginForm";

export const metadata: Metadata = {
	title: "Login to your account",
	description: "Login to your account",
}

export default function Login() {
	return (
		<section className="_social_login_wrapper _layout_main_wrapper">
			<div className="_shape_one">
				<Image src="/assets/images/shape1.svg" width={200} height={200} alt="Decorative Shape 1" className="_shape_Image"/>
				<Image src="/assets/images/dark_shape.svg" width={200} height={200} alt="Decorative Shape Dark 1" className="_dark_shape"/>
			</div>
			<div className="_shape_two">
				<Image src="/assets/images/shape2.svg" width={200} height={200} alt="" className="_shape_Image"/>
				<Image src="/assets/images/dark_shape1.svg" width={200} height={200} alt="" className="_dark_shape _dark_shape_opacity"/>
			</div>
			<div className="_shape_three">
				<Image src="/assets/images/shape3.svg" width={200} height={200} alt="" className="_shape_Image"/>
				<Image src="/assets/images/dark_shape2.svg" width={200} height={200} alt="" className="_dark_shape _dark_shape_opacity"/>
			</div>
			<div className="_social_login_wrap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
							<div className="_social_login_left">
								<div className="_social_login_left_image">
									<Image src="/assets/images/login.png" width={633} height={633}  alt="Image" className="_left_img"/>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
							<div className="_social_login_content">
								<div className="_social_login_left_logo _mar_b28">
									<Image src="/assets/images/logo.svg" width={200} height={200} alt="Image" className="_left_logo"/>
								</div>
								<p className="_social_login_content_para _mar_b8">Welcome back</p>
								<h4 className="_social_login_content_title _titl4 _mar_b50">Login to your account</h4>
								<button type="button" className="_social_login_content_btn _mar_b40">
									<Image src="/assets/images/google.svg" alt="Image" width={200} height={200} className="_google_Image"/> <span>Or sign-in with google</span>
								</button>
								<div className="_social_login_content_bottom_txt _mar_b40"><span>Or</span>
								</div>
								<LoginForm/>
								<div className="row">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div className="_social_login_bottom_txt">
											<p className="_social_login_bottom_txt_para">
												Dont have an account? <Link href={'/register'}>Create New Account</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
