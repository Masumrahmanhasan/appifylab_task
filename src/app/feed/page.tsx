import Image from "next/image";
import {Header} from "@/components/feed/Header";
import Link from "next/link";

export default function Feed() {
	return (
		<div className="_layout _layout_main_wrapper">
			<div className="_layout_mode_swithing_btn">
				<button type="button" className="_layout_swithing_btn_link">
					<div className="_layout_swithing_btn">
						<div className="_layout_swithing_btn_round">
						
						</div>
					</div>
					<div className="_layout_change_btn_ic1">
						<svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" fill="none" viewBox="0 0 11 16">
							<path fill="#fff"
							      d="M2.727 14.977l.04-.498-.04.498zm-1.72-.49l.489-.11-.489.11zM3.232 1.212L3.514.8l-.282.413zM9.792 8a6.5 6.5 0 00-6.5-6.5v-1a7.5 7.5 0 017.5 7.5h-1zm-6.5 6.5a6.5 6.5 0 006.5-6.5h1a7.5 7.5 0 01-7.5 7.5v-1zm-.525-.02c.173.013.348.02.525.02v1c-.204 0-.405-.008-.605-.024l.08-.997zm-.261-1.83A6.498 6.498 0 005.792 7h1a7.498 7.498 0 01-3.791 6.52l-.495-.87zM5.792 7a6.493 6.493 0 00-2.841-5.374L3.514.8A7.493 7.493 0 016.792 7h-1zm-3.105 8.476c-.528-.042-.985-.077-1.314-.155-.316-.075-.746-.242-.854-.726l.977-.217c-.028-.124-.145-.09.106-.03.237.056.6.086 1.165.131l-.08.997zm.314-1.956c-.622.354-1.045.596-1.31.792a.967.967 0 00-.204.185c-.01.013.027-.038.009-.12l-.977.218a.836.836 0 01.144-.666c.112-.162.27-.3.433-.42.324-.24.814-.519 1.41-.858L3 13.52zM3.292 1.5a.391.391 0 00.374-.285A.382.382 0 003.514.8l-.563.826A.618.618 0 012.702.95a.609.609 0 01.59-.45v1z"/>
						</svg>
					</div>
					<div className="_layout_change_btn_ic2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="4.389" stroke="#fff" transform="rotate(-90 12 12)"/>
							<path stroke="#fff" strokeLinecap="round"
							      d="M3.444 12H1M23 12h-2.444M5.95 5.95L4.222 4.22M19.778 19.779L18.05 18.05M12 3.444V1M12 23v-2.445M18.05 5.95l1.728-1.729M4.222 19.779L5.95 18.05"/>
						</svg>
					</div>
				</button>
			</div>
			
			<div className="_main_layout">
				<Header/>
				<div className="container _custom_container">
					<div className="_layout_inner_wrap">
						<div className="row">
							
							<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
								<div className="_layout_left_sidebar_wrap">
									<div className="_layout_left_sidebar_inner">
										<div className="_left_inner_area_explore _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
											<h4 className="_left_inner_area_explore_title _title5  _mar_b24">Explore</h4>
											<ul className="_left_inner_area_explore_list">
												<li className="_left_inner_area_explore_item _explore_item">
													<a href="#0" className="_left_inner_area_explore_link">
														<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
															<path fill="#666" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 1.395a8.605 8.605 0 100 17.21 8.605 8.605 0 000-17.21zm-1.233 4.65l.104.01c.188.028.443.113.668.203 1.026.398 3.033 1.746 3.8 2.563l.223.239.08.092a1.16 1.16 0 01.025 1.405c-.04.053-.086.105-.19.215l-.269.28c-.812.794-2.57 1.971-3.569 2.391-.277.117-.675.25-.865.253a1.167 1.167 0 01-1.07-.629c-.053-.104-.12-.353-.171-.586l-.051-.262c-.093-.57-.143-1.437-.142-2.347l.001-.288c.01-.858.063-1.64.157-2.147.037-.207.12-.563.167-.678.104-.25.291-.45.523-.575a1.15 1.15 0 01.58-.14zm.14 1.467l-.027.126-.034.198c-.07.483-.112 1.233-.111 2.036l.001.279c.009.737.053 1.414.123 1.841l.048.235.192-.07c.883-.372 2.636-1.56 3.23-2.2l.08-.087-.212-.218c-.711-.682-2.38-1.79-3.167-2.095l-.124-.045z" />
														</svg>Learning</a> <span className="_left_inner_area_explore_link_txt">New</span>
												</li>
												<li className="_left_inner_area_explore_item">
													<a href="#0" className="_left_inner_area_explore_link">
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
															<path fill="#666" d="M14.96 2c3.101 0 5.159 2.417 5.159 5.893v8.214c0 3.476-2.058 5.893-5.16 5.893H6.989c-3.101 0-5.159-2.417-5.159-5.893V7.893C1.83 4.42 3.892 2 6.988 2h7.972zm0 1.395H6.988c-2.37 0-3.883 1.774-3.883 4.498v8.214c0 2.727 1.507 4.498 3.883 4.498h7.972c2.375 0 3.883-1.77 3.883-4.498V7.893c0-2.727-1.508-4.498-3.883-4.498zM7.036 9.63c.323 0 .59.263.633.604l.005.094v6.382c0 .385-.285.697-.638.697-.323 0-.59-.262-.632-.603l-.006-.094v-6.382c0-.385.286-.697.638-.697zm3.97-3.053c.323 0 .59.262.632.603l.006.095v9.435c0 .385-.285.697-.638.697-.323 0-.59-.262-.632-.603l-.006-.094V7.274c0-.386.286-.698.638-.698zm3.905 6.426c.323 0 .59.262.632.603l.006.094v3.01c0 .385-.285.697-.638.697-.323 0-.59-.262-.632-.603l-.006-.094v-3.01c0-.385.286-.697.638-.697z" />
														</svg>Insights</a>
												</li>
												<li className="_left_inner_area_explore_item">
													<a href="find-friends.html" className="_left_inner_area_explore_link">
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
															<path fill="#666" d="M9.032 14.456l.297.002c4.404.041 6.907 1.03 6.907 3.678 0 2.586-2.383 3.573-6.615 3.654l-.589.005c-4.588 0-7.203-.972-7.203-3.68 0-2.704 2.604-3.659 7.203-3.659zm0 1.5l-.308.002c-3.645.038-5.523.764-5.523 2.157 0 1.44 1.99 2.18 5.831 2.18 3.847 0 5.832-.728 5.832-2.159 0-1.44-1.99-2.18-5.832-2.18zm8.53-8.037c.347 0 .634.282.679.648l.006.102v1.255h1.185c.38 0 .686.336.686.75 0 .38-.258.694-.593.743l-.093.007h-1.185v1.255c0 .414-.307.75-.686.75-.347 0-.634-.282-.68-.648l-.005-.102-.001-1.255h-1.183c-.379 0-.686-.336-.686-.75 0-.38.258-.694.593-.743l.093-.007h1.183V8.669c0-.414.308-.75.686-.75zM9.031 2c2.698 0 4.864 2.369 4.864 5.319 0 2.95-2.166 5.318-4.864 5.318-2.697 0-4.863-2.369-4.863-5.318C4.17 4.368 6.335 2 9.032 2zm0 1.5c-1.94 0-3.491 1.697-3.491 3.819 0 2.12 1.552 3.818 3.491 3.818 1.94 0 3.492-1.697 3.492-3.818 0-2.122-1.551-3.818-3.492-3.818z" />
														</svg>Find friends</a>
												</li>
												<li className="_left_inner_area_explore_item">
													<a href="#0" className="_left_inner_area_explore_link">
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
															<path fill="#666" d="M13.704 2c2.8 0 4.585 1.435 4.585 4.258V20.33c0 .443-.157.867-.436 1.18-.279.313-.658.489-1.063.489a1.456 1.456 0 01-.708-.203l-5.132-3.134-5.112 3.14c-.615.36-1.361.194-1.829-.405l-.09-.126-.085-.155a1.913 1.913 0 01-.176-.786V6.434C3.658 3.5 5.404 2 8.243 2h5.46zm0 1.448h-5.46c-2.191 0-3.295.948-3.295 2.986V20.32c0 .044.01.088 0 .07l.034.063c.059.09.17.12.247.074l5.11-3.138c.38-.23.84-.23 1.222.001l5.124 3.128a.252.252 0 00.114.035.188.188 0 00.14-.064.236.236 0 00.058-.157V6.258c0-1.9-1.132-2.81-3.294-2.81zm.386 4.869c.357 0 .646.324.646.723 0 .367-.243.67-.559.718l-.087.006H7.81c-.357 0-.646-.324-.646-.723 0-.367.243-.67.558-.718l.088-.006h6.28z" />
														</svg>Bookmarks</a>
												</li>
												<li className="_left_inner_area_explore_item">
													<a href="group.html" className="_left_inner_area_explore_link">
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>Group</a>
												</li>
												<li className="_left_inner_area_explore_item _explore_item">
													<a href="#0" className="_left_inner_area_explore_link">
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
															<path fill="#666" d="M7.625 2c.315-.015.642.306.645.69.003.309.234.558.515.558h.928c1.317 0 2.402 1.169 2.419 2.616v.24h2.604c2.911-.026 5.255 2.337 5.377 5.414.005.12.006.245.004.368v4.31c.062 3.108-2.21 5.704-5.064 5.773-.117.003-.228 0-.34-.005a199.325 199.325 0 01-7.516 0c-2.816.132-5.238-2.292-5.363-5.411a6.262 6.262 0 01-.004-.371V11.87c-.03-1.497.48-2.931 1.438-4.024.956-1.094 2.245-1.714 3.629-1.746a3.28 3.28 0 01.342.005l3.617-.001v-.231c-.008-.676-.522-1.23-1.147-1.23h-.93c-.973 0-1.774-.866-1.785-1.937-.003-.386.28-.701.631-.705zm-.614 5.494h-.084C5.88 7.52 4.91 7.987 4.19 8.812c-.723.823-1.107 1.904-1.084 3.045v4.34c-.002.108 0 .202.003.294.094 2.353 1.903 4.193 4.07 4.08 2.487.046 5.013.046 7.55-.001.124.006.212.007.3.004 2.147-.05 3.86-2.007 3.812-4.361V11.87a5.027 5.027 0 00-.002-.291c-.093-2.338-1.82-4.082-4.029-4.082l-.07.002H7.209a4.032 4.032 0 00-.281-.004l.084-.001zm1.292 4.091c.341 0 .623.273.667.626l.007.098-.001 1.016h.946c.372 0 .673.325.673.725 0 .366-.253.669-.582.717l-.091.006h-.946v1.017c0 .4-.3.724-.673.724-.34 0-.622-.273-.667-.626l-.006-.098v-1.017h-.945c-.372 0-.674-.324-.674-.723 0-.367.254-.67.582-.718l.092-.006h.945v-1.017c0-.4.301-.724.673-.724zm7.058 3.428c.372 0 .674.324.674.724 0 .366-.254.67-.582.717l-.091.007h-.09c-.373 0-.674-.324-.674-.724 0-.367.253-.67.582-.717l.091-.007h.09zm-1.536-3.322c.372 0 .673.324.673.724 0 .367-.253.67-.582.718l-.091.006h-.09c-.372 0-.674-.324-.674-.724 0-.366.254-.67.582-.717l.092-.007h.09z" />
														</svg>Gaming</a> <span className="_left_inner_area_explore_link_txt">New</span>
												</li>
												<li className="_left_inner_area_explore_item">
													<a href="#0" className="_left_inner_area_explore_link">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
															<path fill="#666" d="M12.616 2c.71 0 1.388.28 1.882.779.495.498.762 1.17.74 1.799l.009.147c.017.146.065.286.144.416.152.255.402.44.695.514.292.074.602.032.896-.137l.164-.082c1.23-.567 2.705-.117 3.387 1.043l.613 1.043c.017.027.03.056.043.085l.057.111a2.537 2.537 0 01-.884 3.204l-.257.159a1.102 1.102 0 00-.33.356 1.093 1.093 0 00-.117.847c.078.287.27.53.56.695l.166.105c.505.346.869.855 1.028 1.439.18.659.083 1.36-.272 1.957l-.66 1.077-.1.152c-.774 1.092-2.279 1.425-3.427.776l-.136-.069a1.19 1.19 0 00-.435-.1 1.128 1.128 0 00-1.143 1.154l-.008.171C15.12 20.971 13.985 22 12.616 22h-1.235c-1.449 0-2.623-1.15-2.622-2.525l-.008-.147a1.045 1.045 0 00-.148-.422 1.125 1.125 0 00-.688-.519c-.29-.076-.6-.035-.9.134l-.177.087a2.674 2.674 0 01-1.794.129 2.606 2.606 0 01-1.57-1.215l-.637-1.078-.085-.16a2.527 2.527 0 011.03-3.296l.104-.065c.309-.21.494-.554.494-.923 0-.401-.219-.772-.6-.989l-.156-.097a2.542 2.542 0 01-.764-3.407l.65-1.045a2.646 2.646 0 013.552-.96l.134.07c.135.06.283.093.425.094.626 0 1.137-.492 1.146-1.124l.009-.194a2.54 2.54 0 01.752-1.593A2.642 2.642 0 0111.381 2h1.235zm0 1.448h-1.235c-.302 0-.592.118-.806.328a1.091 1.091 0 00-.325.66l-.013.306C10.133 6.07 9 7.114 7.613 7.114a2.619 2.619 0 01-1.069-.244l-.192-.1a1.163 1.163 0 00-1.571.43l-.65 1.045a1.103 1.103 0 00.312 1.464l.261.162A2.556 2.556 0 015.858 12c0 .845-.424 1.634-1.156 2.13l-.156.096c-.512.29-.71.918-.472 1.412l.056.107.63 1.063c.147.262.395.454.688.536.26.072.538.052.754-.042l.109-.052a2.652 2.652 0 011.986-.261 2.591 2.591 0 011.925 2.21l.02.353c.062.563.548 1 1.14 1h1.234c.598 0 1.094-.45 1.14-1l.006-.11a2.536 2.536 0 01.766-1.823 2.65 2.65 0 011.877-.75c.35.009.695.086 1.048.241l.316.158c.496.213 1.084.058 1.382-.361l.073-.111.644-1.052a1.1 1.1 0 00-.303-1.455l-.273-.17a2.563 2.563 0 01-1.062-1.462 2.513 2.513 0 01.265-1.944c.19-.326.451-.606.792-.838l.161-.099c.512-.293.71-.921.473-1.417l-.07-.134-.013-.028-.585-.995a1.157 1.157 0 00-1.34-.513l-.111.044-.104.051a2.661 2.661 0 01-1.984.272 2.607 2.607 0 01-1.596-1.18 2.488 2.488 0 01-.342-1.021l-.014-.253a1.11 1.11 0 00-.323-.814 1.158 1.158 0 00-.823-.34zm-.613 5.284c1.842 0 3.336 1.463 3.336 3.268 0 1.805-1.494 3.268-3.336 3.268-1.842 0-3.336-1.463-3.336-3.268 0-1.805 1.494-3.268 3.336-3.268zm0 1.448c-1.026 0-1.858.815-1.858 1.82 0 1.005.832 1.82 1.858 1.82 1.026 0 1.858-.815 1.858-1.82 0-1.005-.832-1.82-1.858-1.82z" />
														</svg>Settings</a>
												</li>
												<li className="_left_inner_area_explore_item">
													<a href="#0" className="_left_inner_area_explore_link">
														<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 24" fill="none" stroke="#666"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
														Save post</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="_layout_left_sidebar_inner">
										<div className="_left_inner_area_suggest _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
											<div className="_left_inner_area_suggest_content _mar_b24">
												<h4 className="_left_inner_area_suggest_content_title _title5">Suggested People</h4>
												<span className="_left_inner_area_suggest_content_txt">
                                                <a className="_left_inner_area_suggest_content_txt_link" href="#0">See All</a>
                                            </span>
											</div>
											<div className="_left_inner_area_suggest_info">
												<div className="_left_inner_area_suggest_info_box">
													<div className="_left_inner_area_suggest_info_image">
														<a href="profile.html">
															<Image width={500} height={500} src="/assets/images/people1.png" alt="Image" className="_info_img" />
														</a>
													</div>
													<div className="_left_inner_area_suggest_info_txt">
														<a href="profile.html">
															<h4 className="_left_inner_area_suggest_info_title">Steve Jobs</h4>
														</a>
														<p className="_left_inner_area_suggest_info_para">CEO of Apple</p>
													</div>
												</div>
												<div className="_left_inner_area_suggest_info_link"> <a href="#0" className="_info_link">Connect</a>
												</div>
											</div>
											<div className="_left_inner_area_suggest_info">
												<div className="_left_inner_area_suggest_info_box">
													<div className="_left_inner_area_suggest_info_image">
														<a href="profile.html">
															<Image width={500} height={500} src="/assets/images/people2.png" alt="Image" className="_info_img1" />
														</a>
													</div>
													<div className="_left_inner_area_suggest_info_txt">
														<a href="profile.html">
															<h4 className="_left_inner_area_suggest_info_title">Ryan Roslansky</h4>
														</a>
														<p className="_left_inner_area_suggest_info_para">CEO of Linkedin</p>
													</div>
												</div>
												<div className="_left_inner_area_suggest_info_link"> <a href="#0" className="_info_link">Connect</a>
												</div>
											</div>
											<div className="_left_inner_area_suggest_info">
												<div className="_left_inner_area_suggest_info_box">
													<div className="_left_inner_area_suggest_info_image">
														<a href="profile.html">
															<Image width={500} height={500} src="/assets/images/people3.png" alt="Image" className="_info_img1" />
														</a>
													</div>
													<div className="_left_inner_area_suggest_info_txt">
														<a href="profile.html">
															<h4 className="_left_inner_area_suggest_info_title">Dylan Field</h4>
														</a>
														<p className="_left_inner_area_suggest_info_para">CEO of Figma</p>
													</div>
												</div>
												<div className="_left_inner_area_suggest_info_link"> <a href="#0" className="_info_link">Connect</a>
												</div>
											</div>
										</div>
									</div>
									<div className="_layout_left_sidebar_inner">
										<div className="_left_inner_area_event _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
											<div className="_left_inner_event_content">
												<h4 className="_left_inner_event_title _title5">Events</h4>
												<a href="event.html" className="_left_inner_event_link">
													See all
												</a>
											</div>
											<Link className="_left_inner_event_card_link" href="event-single.html">
												<div className="_left_inner_event_card">
													<div className="_left_inner_event_card_iamge">
														<Image width={500} height={500} src="/assets/images/feed_event1.png" alt="Image" className="_card_img" />
													</div>
													<div className="_left_inner_event_card_content">
														<div className="_left_inner_card_date">
															<p className="_left_inner_card_date_para">10</p>
															<p className="_left_inner_card_date_para1">Jul</p>
														</div>
														<div className="_left_inner_card_txt">
															<h4 className="_left_inner_event_card_title">No more terrorism no more cry</h4>
														</div>
													</div>
													<hr className="_underline"/>
														<div className="_left_inner_event_bottom">
															<p className="_left_iner_event_bottom">17 People Going</p> <button className="_left_iner_event_bottom_link">Going</button>
														</div>
												</div>
											</Link>
											<Link className="_left_inner_event_card_link" href="event-single.html">
												<div className="_left_inner_event_card">
													<div className="_left_inner_event_card_iamge">
														<Image width={500} height={500} src="/assets/images/feed_event1.png" alt="Image" className="_card_img" />
													</div>
													<div className="_left_inner_event_card_content">
														<div className="_left_inner_card_date">
															<p className="_left_inner_card_date_para">10</p>
															<p className="_left_inner_card_date_para1">Jul</p>
														</div>
														<div className="_left_inner_card_txt">
															<h4 className="_left_inner_event_card_title">No more terrorism no more cry</h4>
														</div>
													</div>
													<hr className="_underline"/>
														<div className="_left_inner_event_bottom">
															<p className="_left_iner_event_bottom">17 People Going</p> <button href="#0" className="_left_iner_event_bottom_link">Going</button>
														</div>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
								<div className="_layout_middle_wrap">
									<div className="_layout_middle_inner">
										
										<div className="_feed_inner_ppl_card _mar_b16">
											<div className="_feed_inner_story_arrow">
												<button type="button" className="_feed_inner_story_arrow_btn">
													<svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" fill="none" viewBox="0 0 9 8">
														<path fill="#fff" d="M8 4l.366-.341.318.341-.318.341L8 4zm-7 .5a.5.5 0 010-1v1zM5.566.659l2.8 3-.732.682-2.8-3L5.566.66zm2.8 3.682l-2.8 3-.732-.682 2.8-3 .732.682zM8 4.5H1v-1h7v1z" />
													</svg>
												</button>
											</div>
											<div className="row">
												<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col">
													<div className="_feed_inner_profile_story _b_radious6 ">
														<div className="_feed_inner_profile_story_image">
															<Image width={500} height={500} src="/assets/images/card_ppl1.png" alt="Image" className="_profile_story_img" />
																<div className="_feed_inner_story_txt">
																	<div className="_feed_inner_story_btn">
																		<button className="_feed_inner_story_btn_link">
																			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
																				<path stroke="#fff" strokeLinecap="round" d="M.5 4.884h9M4.884 9.5v-9" />
																			</svg>
																		</button>
																	</div>
																	<p className="_feed_inner_story_para">Your Story</p>
																</div>
														</div>
													</div>
												</div>
												<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col">
													<div className="_feed_inner_public_story _b_radious6">
														<div className="_feed_inner_public_story_image">
															<Image width={500} height={500} src="/assets/images/card_ppl2.png" alt="Image" className="_public_story_img" />
																<div className="_feed_inner_pulic_story_txt">
																	<p className="_feed_inner_pulic_story_para">Ryan Roslansky</p>
																</div>
																<div className="_feed_inner_public_mini">
																	<Image width={500} height={500} src="/assets/images/mini_pic.png" alt="Image" className="_public_mini_img" />
																</div>
														</div>
													</div>
												</div>
												<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 _custom_mobile_none">
													<div className="_feed_inner_public_story _b_radious6">
														<div className="_feed_inner_public_story_image">
															<Image width={500} height={500} src="/assets/images/card_ppl3.png" alt="Image" className="_public_story_img" />
																<div className="_feed_inner_pulic_story_txt">
																	<p className="_feed_inner_pulic_story_para">Ryan Roslansky</p>
																</div>
																<div className="_feed_inner_public_mini">
																	<Image width={500} height={500} src="/assets/images/mini_pic.png" alt="Image" className="_public_mini_img" />
																</div>
														</div>
													</div>
												</div>
												<div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 _custom_none">
													<div className="_feed_inner_public_story _b_radious6">
														<div className="_feed_inner_public_story_image">
															<Image width={500} height={500} src="/assets/images/card_ppl4.png" alt="Image" className="_public_story_img" />
																<div className="_feed_inner_pulic_story_txt">
																	<p className="_feed_inner_pulic_story_para">Ryan Roslansky</p>
																</div>
																<div className="_feed_inner_public_mini">
																	<Image width={500} height={500} src="/assets/images/mini_pic.png" alt="Image" className="_public_mini_img" />
																</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										<div className="_feed_inner_ppl_card_mobile _mar_b16">
											<div className="_feed_inner_ppl_card_area">
												<ul className="_feed_inner_ppl_card_area_list">
													<li className="_feed_inner_ppl_card_area_item">
														<a href="#0" className="_feed_inner_ppl_card_area_link">
															<div className="_feed_inner_ppl_card_area_story">
																<Image width={500} height={500} src="/assets/images/mobile_story_img.png" alt="Image" className="_card_story_img" />
																	<div className="_feed_inner_ppl_btn">
																		<button className="_feed_inner_ppl_btn_link" type="button">
																			<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
																				<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M6 2.5v7M2.5 6h7"/>
																			</svg>
																		</button>
																	</div>
															</div>
															<p className="_feed_inner_ppl_card_area_link_txt">Your Story</p>
														</a>
													</li>
													<li className="_feed_inner_ppl_card_area_item">
														<a href="#0" className="_feed_inner_ppl_card_area_link">
															<div className="_feed_inner_ppl_card_area_story_active">
																<Image width={500} height={500} src="/assets/images/mobile_story_img1.png" alt="Image" className="_card_story_img1" />
															</div>
															<p className="_feed_inner_ppl_card_area_txt">Ryan...</p>
														</a>
													</li>
													<li className="_feed_inner_ppl_card_area_item">
														<a href="#0" className="_feed_inner_ppl_card_area_link">
															<div className="_feed_inner_ppl_card_area_story_inactive">
																<Image width={500} height={500} src="/assets/images/mobile_story_img2.png" alt="Image" className="_card_story_img1" />
															</div>
															<p className="_feed_inner_ppl_card_area_txt">Ryan...</p>
														</a>
													</li>
													<li className="_feed_inner_ppl_card_area_item">
														<a href="#0" className="_feed_inner_ppl_card_area_link">
															<div href="#0" className="_feed_inner_ppl_card_area_link">
																<div className="_feed_inner_ppl_card_area_story_active">
																	<Image width={500} height={500} src="/assets/images/mobile_story_img1.png" alt="Image" className="_card_story_img1" />
																</div>
																<p className="_feed_inner_ppl_card_area_txt">Ryan...</p>
															</div>
														</a>
													</li>
													<li className="_feed_inner_ppl_card_area_item">
														<a href="#0" className="_feed_inner_ppl_card_area_link">
															<div className="_feed_inner_ppl_card_area_story_inactive">
																<Image width={500} height={500} src="/assets/images/mobile_story_img2.png" alt="Image" className="_card_story_img1" />
															</div>
															<p className="_feed_inner_ppl_card_area_txt">Ryan...</p>
														</a>
													</li>
													<li className="_feed_inner_ppl_card_area_item">
														<a href="#0" className="_feed_inner_ppl_card_area_link">
															<div href="#0" className="_feed_inner_ppl_card_area_link">
																<div className="_feed_inner_ppl_card_area_story_active">
																	<Image width={500} height={500} src="/assets/images/mobile_story_img1.png" alt="Image" className="_card_story_img1" />
																</div>
																<p className="_feed_inner_ppl_card_area_txt">Ryan...</p>
															</div>
														</a>
													</li>
													
													<li className="_feed_inner_ppl_card_area_item">
														<a href="#0" className="_feed_inner_ppl_card_area_link">
															<div className="_feed_inner_ppl_card_area_story">
																<Image width={500} height={500} src="/assets/images/mobile_story_img.png" alt="Image" className="_card_story_img" />
															</div>
															<p className="_feed_inner_ppl_card_area_txt">Ryan...</p>
														</a>
													</li>
													<li className="_feed_inner_ppl_card_area_item">
														<a href="#0" className="_feed_inner_ppl_card_area_link">
															<div className="_feed_inner_ppl_card_area_story_active">
																<Image width={500} height={500} src="/assets/images/mobile_story_img1.png" alt="Image" className="_card_story_img1" />
															</div>
															<p className="_feed_inner_ppl_card_area_txt">Ryan...</p>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="_feed_inner_text_area  _b_radious6 _padd_b24 _padd_t24 _padd_r24 _padd_l24 _mar_b16">
											<div className="_feed_inner_text_area_box">
												<div className="_feed_inner_text_area_box_image">
													<Image width={500} height={500} src="/assets/images/txt_img.png" alt="Image" className="_txt_img" />
												</div>
												<div className="form-floating _feed_inner_text_area_box_form ">
													<textarea className="form-control _textarea" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
													<label className="_feed_textarea_label" htmlFor="floatingTextarea">Write something ...
														<svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" fill="none" viewBox="0 0 23 24">
															<path fill="#666" d="M19.504 19.209c.332 0 .601.289.601.646 0 .326-.226.596-.52.64l-.081.005h-6.276c-.332 0-.602-.289-.602-.645 0-.327.227-.597.52-.64l.082-.006h6.276zM13.4 4.417c1.139-1.223 2.986-1.223 4.125 0l1.182 1.268c1.14 1.223 1.14 3.205 0 4.427L9.82 19.649a2.619 2.619 0 01-1.916.85h-3.64c-.337 0-.61-.298-.6-.66l.09-3.941a3.019 3.019 0 01.794-1.982l8.852-9.5zm-.688 2.562l-7.313 7.85a1.68 1.68 0 00-.441 1.101l-.077 3.278h3.023c.356 0 .698-.133.968-.376l.098-.096 7.35-7.887-3.608-3.87zm3.962-1.65a1.633 1.633 0 00-2.423 0l-.688.737 3.606 3.87.688-.737c.631-.678.666-1.755.105-2.477l-.105-.124-1.183-1.268z" />
														</svg>
													</label>
												</div>
											</div>
											<div className="_feed_inner_text_area_bottom">
												<div className="_feed_inner_text_area_item">
													<div className="_feed_inner_text_area_bottom_photo _feed_common">
														<button type="button" className="_feed_inner_text_area_bottom_photo_link"> <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
														<path fill="#666" d="M13.916 0c3.109 0 5.18 2.429 5.18 5.914v8.17c0 3.486-2.072 5.916-5.18 5.916H5.999C2.89 20 .827 17.572.827 14.085v-8.17C.827 2.43 2.897 0 6 0h7.917zm0 1.504H5.999c-2.321 0-3.799 1.735-3.799 4.41v8.17c0 2.68 1.472 4.412 3.799 4.412h7.917c2.328 0 3.807-1.734 3.807-4.411v-8.17c0-2.678-1.478-4.411-3.807-4.411zm.65 8.68l.12.125 1.9 2.147a.803.803 0 01-.016 1.063.642.642 0 01-.894.058l-.076-.074-1.9-2.148a.806.806 0 00-1.205-.028l-.074.087-2.04 2.717c-.722.963-2.02 1.066-2.86.26l-.111-.116-.814-.91a.562.562 0 00-.793-.07l-.075.073-1.4 1.617a.645.645 0 01-.97.029.805.805 0 01-.09-.977l.064-.086 1.4-1.617c.736-.852 1.95-.897 2.734-.137l.114.12.81.905a.587.587 0 00.861.033l.07-.078 2.04-2.718c.81-1.08 2.27-1.19 3.205-.275zM6.831 4.64c1.265 0 2.292 1.125 2.292 2.51 0 1.386-1.027 2.511-2.292 2.511S4.54 8.537 4.54 7.152c0-1.386 1.026-2.51 2.291-2.51zm0 1.504c-.507 0-.918.451-.918 1.007 0 .555.411 1.006.918 1.006.507 0 .919-.451.919-1.006 0-.556-.412-1.007-.919-1.007z"/>
													  </svg></span>
															Photo</button>
													</div>
													<div className="_feed_inner_text_area_bottom_video _feed_common">
														<button type="button" className="_feed_inner_text_area_bottom_photo_link"> <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
														<path fill="#666" d="M11.485 4.5c2.213 0 3.753 1.534 3.917 3.784l2.418-1.082c1.047-.468 2.188.327 2.271 1.533l.005.141v6.64c0 1.237-1.103 2.093-2.155 1.72l-.121-.047-2.418-1.083c-.164 2.25-1.708 3.785-3.917 3.785H5.76c-2.343 0-3.932-1.72-3.932-4.188V8.688c0-2.47 1.589-4.188 3.932-4.188h5.726zm0 1.5H5.76C4.169 6 3.197 7.05 3.197 8.688v7.015c0 1.636.972 2.688 2.562 2.688h5.726c1.586 0 2.562-1.054 2.562-2.688v-.686-6.329c0-1.636-.973-2.688-2.562-2.688zM18.4 8.57l-.062.02-2.921 1.306v4.596l2.921 1.307c.165.073.343-.036.38-.215l.008-.07V8.876c0-.195-.16-.334-.326-.305z"/>
													</svg>
													</span>
															Video</button>
													</div>
													<div className="_feed_inner_text_area_bottom_event _feed_common">
														<button type="button" className="_feed_inner_text_area_bottom_photo_link"> <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
														<path fill="#666" d="M14.371 2c.32 0 .585.262.627.603l.005.095v.788c2.598.195 4.188 2.033 4.18 5v8.488c0 3.145-1.786 5.026-4.656 5.026H7.395C4.53 22 2.74 20.087 2.74 16.904V8.486c0-2.966 1.596-4.804 4.187-5v-.788c0-.386.283-.698.633-.698.32 0 .584.262.626.603l.006.095v.771h5.546v-.771c0-.386.284-.698.633-.698zm3.546 8.283H4.004l.001 6.621c0 2.325 1.137 3.616 3.183 3.697l.207.004h7.132c2.184 0 3.39-1.271 3.39-3.63v-6.692zm-3.202 5.853c.349 0 .632.312.632.698 0 .353-.238.645-.546.691l-.086.006c-.357 0-.64-.312-.64-.697 0-.354.237-.645.546-.692l.094-.006zm-3.742 0c.35 0 .632.312.632.698 0 .353-.238.645-.546.691l-.086.006c-.357 0-.64-.312-.64-.697 0-.354.238-.645.546-.692l.094-.006zm-3.75 0c.35 0 .633.312.633.698 0 .353-.238.645-.547.691l-.093.006c-.35 0-.633-.312-.633-.697 0-.354.238-.645.547-.692l.094-.006zm7.492-3.615c.349 0 .632.312.632.697 0 .354-.238.645-.546.692l-.086.006c-.357 0-.64-.312-.64-.698 0-.353.237-.645.546-.691l.094-.006zm-3.742 0c.35 0 .632.312.632.697 0 .354-.238.645-.546.692l-.086.006c-.357 0-.64-.312-.64-.698 0-.353.238-.645.546-.691l.094-.006zm-3.75 0c.35 0 .633.312.633.697 0 .354-.238.645-.547.692l-.093.006c-.35 0-.633-.312-.633-.698 0-.353.238-.645.547-.691l.094-.006zm6.515-7.657H8.192v.895c0 .385-.283.698-.633.698-.32 0-.584-.263-.626-.603l-.006-.095v-.874c-1.886.173-2.922 1.422-2.922 3.6v.402h13.912v-.403c.007-2.181-1.024-3.427-2.914-3.599v.874c0 .385-.283.698-.632.698-.32 0-.585-.263-.627-.603l-.005-.095v-.895z"/>
													</svg>
													</span>
															Event</button>
													</div>
													<div className="_feed_inner_text_area_bottom_article _feed_common">
														<button type="button" className="_feed_inner_text_area_bottom_photo_link"> <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
														<path fill="#666" d="M12.49 0c2.92 0 4.665 1.92 4.693 5.132v9.659c0 3.257-1.75 5.209-4.693 5.209H5.434c-.377 0-.734-.032-1.07-.095l-.2-.041C2 19.371.74 17.555.74 14.791V5.209c0-.334.019-.654.055-.96C1.114 1.564 2.799 0 5.434 0h7.056zm-.008 1.457H5.434c-2.244 0-3.381 1.263-3.381 3.752v9.582c0 2.489 1.137 3.752 3.38 3.752h7.049c2.242 0 3.372-1.263 3.372-3.752V5.209c0-2.489-1.13-3.752-3.372-3.752zm-.239 12.053c.36 0 .652.324.652.724 0 .4-.292.724-.652.724H5.656c-.36 0-.652-.324-.652-.724 0-.4.293-.724.652-.724h6.587zm0-4.239a.643.643 0 01.632.339.806.806 0 010 .78.643.643 0 01-.632.339H5.656c-.334-.042-.587-.355-.587-.729s.253-.688.587-.729h6.587zM8.17 5.042c.335.041.588.355.588.729 0 .373-.253.687-.588.728H5.665c-.336-.041-.589-.355-.589-.728 0-.374.253-.688.589-.729H8.17z"/>
													  </svg>
													</span>
															Article</button>
													</div>
												</div>
												<div className="_feed_inner_text_area_btn">
													<button type="button" className="_feed_inner_text_area_btn_link">
														<svg className="_mar_img" xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none" viewBox="0 0 14 13">
															<path fill="#fff" fillRule="evenodd" d="M6.37 7.879l2.438 3.955a.335.335 0 00.34.162c.068-.01.23-.05.289-.247l3.049-10.297a.348.348 0 00-.09-.35.341.341 0 00-.34-.088L1.75 4.03a.34.34 0 00-.247.289.343.343 0 00.16.347L5.666 7.17 9.2 3.597a.5.5 0 01.712.703L6.37 7.88zM9.097 13c-.464 0-.89-.236-1.14-.641L5.372 8.165l-4.237-2.65a1.336 1.336 0 01-.622-1.331c.074-.536.441-.96.957-1.112L11.774.054a1.347 1.347 0 011.67 1.682l-3.05 10.296A1.332 1.332 0 019.098 13z" clipRule="evenodd" />
														</svg> <span>Post</span>
													</button>
												</div>
											</div>
											
											<div className="_feed_inner_text_area_bottom_mobile">
												<div className="_feed_inner_text_mobile">
													<div className="_feed_inner_text_area_item">
														<div className="_feed_inner_text_area_bottom_photo _feed_common">
															<button type="button" className="_feed_inner_text_area_bottom_photo_link"> <span className="_feed_inner_text_area_bottom_photo_iamge _mar_img"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
															<path fill="#666" d="M13.916 0c3.109 0 5.18 2.429 5.18 5.914v8.17c0 3.486-2.072 5.916-5.18 5.916H5.999C2.89 20 .827 17.572.827 14.085v-8.17C.827 2.43 2.897 0 6 0h7.917zm0 1.504H5.999c-2.321 0-3.799 1.735-3.799 4.41v8.17c0 2.68 1.472 4.412 3.799 4.412h7.917c2.328 0 3.807-1.734 3.807-4.411v-8.17c0-2.678-1.478-4.411-3.807-4.411zm.65 8.68l.12.125 1.9 2.147a.803.803 0 01-.016 1.063.642.642 0 01-.894.058l-.076-.074-1.9-2.148a.806.806 0 00-1.205-.028l-.074.087-2.04 2.717c-.722.963-2.02 1.066-2.86.26l-.111-.116-.814-.91a.562.562 0 00-.793-.07l-.075.073-1.4 1.617a.645.645 0 01-.97.029.805.805 0 01-.09-.977l.064-.086 1.4-1.617c.736-.852 1.95-.897 2.734-.137l.114.12.81.905a.587.587 0 00.861.033l.07-.078 2.04-2.718c.81-1.08 2.27-1.19 3.205-.275zM6.831 4.64c1.265 0 2.292 1.125 2.292 2.51 0 1.386-1.027 2.511-2.292 2.511S4.54 8.537 4.54 7.152c0-1.386 1.026-2.51 2.291-2.51zm0 1.504c-.507 0-.918.451-.918 1.007 0 .555.411 1.006.918 1.006.507 0 .919-.451.919-1.006 0-.556-.412-1.007-.919-1.007z"/>
														  </svg></span>
															</button>
														</div>
														<div className="_feed_inner_text_area_bottom_video _feed_common">
															<button type="button" className="_feed_inner_text_area_bottom_photo_link">
															<span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
																<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
																	<path fill="#666" d="M11.485 4.5c2.213 0 3.753 1.534 3.917 3.784l2.418-1.082c1.047-.468 2.188.327 2.271 1.533l.005.141v6.64c0 1.237-1.103 2.093-2.155 1.72l-.121-.047-2.418-1.083c-.164 2.25-1.708 3.785-3.917 3.785H5.76c-2.343 0-3.932-1.72-3.932-4.188V8.688c0-2.47 1.589-4.188 3.932-4.188h5.726zm0 1.5H5.76C4.169 6 3.197 7.05 3.197 8.688v7.015c0 1.636.972 2.688 2.562 2.688h5.726c1.586 0 2.562-1.054 2.562-2.688v-.686-6.329c0-1.636-.973-2.688-2.562-2.688zM18.4 8.57l-.062.02-2.921 1.306v4.596l2.921 1.307c.165.073.343-.036.38-.215l.008-.07V8.876c0-.195-.16-.334-.326-.305z"/>
																</svg>
															</span>
															</button>
														</div>
														<div className="_feed_inner_text_area_bottom_event _feed_common">
															<button type="button" className="_feed_inner_text_area_bottom_photo_link">
															<span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
																<svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
																	<path fill="#666" d="M14.371 2c.32 0 .585.262.627.603l.005.095v.788c2.598.195 4.188 2.033 4.18 5v8.488c0 3.145-1.786 5.026-4.656 5.026H7.395C4.53 22 2.74 20.087 2.74 16.904V8.486c0-2.966 1.596-4.804 4.187-5v-.788c0-.386.283-.698.633-.698.32 0 .584.262.626.603l.006.095v.771h5.546v-.771c0-.386.284-.698.633-.698zm3.546 8.283H4.004l.001 6.621c0 2.325 1.137 3.616 3.183 3.697l.207.004h7.132c2.184 0 3.39-1.271 3.39-3.63v-6.692zm-3.202 5.853c.349 0 .632.312.632.698 0 .353-.238.645-.546.691l-.086.006c-.357 0-.64-.312-.64-.697 0-.354.237-.645.546-.692l.094-.006zm-3.742 0c.35 0 .632.312.632.698 0 .353-.238.645-.546.691l-.086.006c-.357 0-.64-.312-.64-.697 0-.354.238-.645.546-.692l.094-.006zm-3.75 0c.35 0 .633.312.633.698 0 .353-.238.645-.547.691l-.093.006c-.35 0-.633-.312-.633-.697 0-.354.238-.645.547-.692l.094-.006zm7.492-3.615c.349 0 .632.312.632.697 0 .354-.238.645-.546.692l-.086.006c-.357 0-.64-.312-.64-.698 0-.353.237-.645.546-.691l.094-.006zm-3.742 0c.35 0 .632.312.632.697 0 .354-.238.645-.546.692l-.086.006c-.357 0-.64-.312-.64-.698 0-.353.238-.645.546-.691l.094-.006zm-3.75 0c.35 0 .633.312.633.697 0 .354-.238.645-.547.692l-.093.006c-.35 0-.633-.312-.633-.698 0-.353.238-.645.547-.691l.094-.006zm6.515-7.657H8.192v.895c0 .385-.283.698-.633.698-.32 0-.584-.263-.626-.603l-.006-.095v-.874c-1.886.173-2.922 1.422-2.922 3.6v.402h13.912v-.403c.007-2.181-1.024-3.427-2.914-3.599v.874c0 .385-.283.698-.632.698-.32 0-.585-.263-.627-.603l-.005-.095v-.895z"/>
																</svg>
															</span>
															</button>
														</div>
														<div className="_feed_inner_text_area_bottom_article _feed_common">
															<button type="button" className="_feed_inner_text_area_bottom_photo_link">
															<span className="_feed_inner_text_area_bottom_photo_iamge _mar_img">
																<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
																	<path fill="#666" d="M12.49 0c2.92 0 4.665 1.92 4.693 5.132v9.659c0 3.257-1.75 5.209-4.693 5.209H5.434c-.377 0-.734-.032-1.07-.095l-.2-.041C2 19.371.74 17.555.74 14.791V5.209c0-.334.019-.654.055-.96C1.114 1.564 2.799 0 5.434 0h7.056zm-.008 1.457H5.434c-2.244 0-3.381 1.263-3.381 3.752v9.582c0 2.489 1.137 3.752 3.38 3.752h7.049c2.242 0 3.372-1.263 3.372-3.752V5.209c0-2.489-1.13-3.752-3.372-3.752zm-.239 12.053c.36 0 .652.324.652.724 0 .4-.292.724-.652.724H5.656c-.36 0-.652-.324-.652-.724 0-.4.293-.724.652-.724h6.587zm0-4.239a.643.643 0 01.632.339.806.806 0 010 .78.643.643 0 01-.632.339H5.656c-.334-.042-.587-.355-.587-.729s.253-.688.587-.729h6.587zM8.17 5.042c.335.041.588.355.588.729 0 .373-.253.687-.588.728H5.665c-.336-.041-.589-.355-.589-.728 0-.374.253-.688.589-.729H8.17z"/>
																  </svg>
															</span>
															</button>
														</div>
													</div>
													<div className="_feed_inner_text_area_btn">
														<button type="button" className="_feed_inner_text_area_btn_link">
															<svg className="_mar_img" xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none" viewBox="0 0 14 13">
																<path fill="#fff" fillRule="evenodd" d="M6.37 7.879l2.438 3.955a.335.335 0 00.34.162c.068-.01.23-.05.289-.247l3.049-10.297a.348.348 0 00-.09-.35.341.341 0 00-.34-.088L1.75 4.03a.34.34 0 00-.247.289.343.343 0 00.16.347L5.666 7.17 9.2 3.597a.5.5 0 01.712.703L6.37 7.88zM9.097 13c-.464 0-.89-.236-1.14-.641L5.372 8.165l-4.237-2.65a1.336 1.336 0 01-.622-1.331c.074-.536.441-.96.957-1.112L11.774.054a1.347 1.347 0 011.67 1.682l-3.05 10.296A1.332 1.332 0 019.098 13z" clipRule="evenodd" />
															</svg> <span>Post</span>
														</button>
													</div>
												</div>
											</div>
											
										</div>
										<div className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16">
											<div className="_feed_inner_timeline_content _padd_r24 _padd_l24">
												<div className="_feed_inner_timeline_post_top">
													<div className="_feed_inner_timeline_post_box">
														<div className="_feed_inner_timeline_post_box_image">
															<Image width={500} height={500} src="/assets/images/post_img.png" alt="" className="_post_img" />
														</div>
														<div className="_feed_inner_timeline_post_box_txt">
															<h4 className="_feed_inner_timeline_post_box_title">Karim Saif</h4>
															<p className="_feed_inner_timeline_post_box_para">5 minute ago .
																<a href="#0">Public</a>
															</p>
														</div>
													</div>
													<div className="_feed_inner_timeline_post_box_dropdown">
														<div className="_feed_timeline_post_dropdown">
															<button href="#0" id="_timeline_show_drop_btn" className="_feed_timeline_post_dropdown_link">
																<svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" fill="none" viewBox="0 0 4 17">
																	<circle cx="2" cy="2" r="2" fill="#C4C4C4" />
																	<circle cx="2" cy="8" r="2" fill="#C4C4C4" />
																	<circle cx="2" cy="15" r="2" fill="#C4C4C4" />
																</svg>
															</button>
														</div>
														<div id="_timeline_drop" className="_feed_timeline_dropdown _timeline_dropdown">
															<ul className="_feed_timeline_dropdown_list">
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14.25 15.75L9 12l-5.25 3.75v-12a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v12z"/>
																		</svg>
																	</span>
																		Save Post
																	</a>
																</li>
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none" viewBox="0 0 20 22">
																			<path fill="#377DFF" fillRule="evenodd" d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z" clipRule="evenodd"/>
																		</svg>
																	</span>
																		Turn On Notification
																	</a>
																</li>
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14.25 2.25H3.75a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zM6.75 6.75l4.5 4.5M11.25 6.75l-4.5 4.5"/>
																		</svg>
																	</span>
																		Hide
																	</a>
																</li>
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M8.25 3H3a1.5 1.5 0 00-1.5 1.5V15A1.5 1.5 0 003 16.5h10.5A1.5 1.5 0 0015 15V9.75"/>
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13.875 1.875a1.591 1.591 0 112.25 2.25L9 11.25 6 12l.75-3 7.125-7.125z"/>
																		</svg>
																	</span>
																		Edit Post
																	</a>
																</li>
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5m2.25 0V15a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5h10.5zM7.5 8.25v4.5M10.5 8.25v4.5"/>
																		</svg>
																	</span>
																		Delete Post
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<h4 className="_feed_inner_timeline_post_title">-Healthy Tracking App</h4>
												<div className="_feed_inner_timeline_image">
													<Image width={500} height={500} src="/assets/images/timeline_img.png" alt="" className="_time_img" />
												</div>
											</div>
											<div className="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26">
												<div className="_feed_inner_timeline_total_reacts_image">
													<Image width={500} height={500} src="/assets/images/react_img1.png" alt="Image" className="_react_img1" />
														<Image width={500} height={500} src="/assets/images/react_img2.png" alt="Image" className="_react_img" />
															<Image width={500} height={500} src="/assets/images/react_img3.png" alt="Image" className="_react_img _rect_img_mbl_none" />
																<Image width={500} height={500} src="/assets/images/react_img4.png" alt="Image" className="_react_img _rect_img_mbl_none" />
																	<Image width={500} height={500} src="/assets/images/react_img5.png" alt="Image" className="_react_img _rect_img_mbl_none" />
																		<p className="_feed_inner_timeline_total_reacts_para">9+</p>
												</div>
												<div className="_feed_inner_timeline_total_reacts_txt">
													<p className="_feed_inner_timeline_total_reacts_para1">
														<a href="#0"><span>12</span> Comment</a>
													</p>
													<p className="_feed_inner_timeline_total_reacts_para2"><span>122</span> Share</p>
												</div>
											</div>
											<div className="_feed_inner_timeline_reaction">
												<button className="_feed_inner_timeline_reaction_emoji _feed_reaction _feed_reaction_active">
												<span className="_feed_inner_timeline_reaction_link"> <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19">
                                                        <path fill="#FFCC4D" d="M9.5 19a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"/>
                                                        <path fill="#664500" d="M9.5 11.083c-1.912 0-3.181-.222-4.75-.527-.358-.07-1.056 0-1.056 1.055 0 2.111 2.425 4.75 5.806 4.75 3.38 0 5.805-2.639 5.805-4.75 0-1.055-.697-1.125-1.055-1.055-1.57.305-2.838.527-4.75.527z"/>
                                                        <path fill="#fff" d="M4.75 11.611s1.583.528 4.75.528 4.75-.528 4.75-.528-1.056 2.111-4.75 2.111-4.75-2.11-4.75-2.11z"/>
                                                        <path fill="#664500" d="M6.333 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847zM12.667 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847z"/>
                                                      </svg>
                                                      Haha
                                                   </span>
												</span>
												</button>
												<button className="_feed_inner_timeline_reaction_comment _feed_reaction">
												<span className="_feed_inner_timeline_reaction_link"> <span>
                                                    <svg className="_reaction_svg" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                                                        <path stroke="#000" d="M1 10.5c0-.464 0-.696.009-.893A9 9 0 019.607 1.01C9.804 1 10.036 1 10.5 1v0c.464 0 .696 0 .893.009a9 9 0 018.598 8.598c.009.197.009.429.009.893v6.046c0 1.36 0 2.041-.317 2.535a2 2 0 01-.602.602c-.494.317-1.174.317-2.535.317H10.5c-.464 0-.696 0-.893-.009a9 9 0 01-8.598-8.598C1 11.196 1 10.964 1 10.5v0z"/>
                                                        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M6.938 9.313h7.125M10.5 14.063h3.563"/>
                                                    </svg>
                                                   Comment
                                                </span>
											</span>
												</button>
												<button className="_feed_inner_timeline_reaction_share _feed_reaction">
												<span className="_feed_inner_timeline_reaction_link"> <span>
                                                    <svg className="_reaction_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="none" viewBox="0 0 24 21">
                                                        <path stroke="#000" strokeLinejoin="round" d="M23 10.5L12.917 1v5.429C3.267 6.429 1 13.258 1 20c2.785-3.52 5.248-5.429 11.917-5.429V20L23 10.5z"/>
                                                      </svg>
                                                   Share
                                                </span>
											</span>
												</button>
											</div>
											<div className="_feed_inner_timeline_cooment_area">
												<div className="_feed_inner_comment_box">
													<form className="_feed_inner_comment_box_form">
														<div className="_feed_inner_comment_box_content">
															<div className="_feed_inner_comment_box_content_image">
																<Image width={500} height={500} src="/assets/images/comment_img.png" alt="" className="_comment_img" />
															</div>
															<div className="_feed_inner_comment_box_content_txt">
																<textarea className="form-control _comment_textarea" placeholder="Write a comment" id="floatingTextarea2"></textarea>
															</div>
														</div>
														<div className="_feed_inner_comment_box_icon">
															<button className="_feed_inner_comment_box_icon_btn">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
																	<path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z" clipRule="evenodd" />
																</svg>
															</button>
															<button className="_feed_inner_comment_box_icon_btn">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
																	<path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z" clipRule="evenodd" />
																</svg>
															</button>
														</div>
													</form>
												</div>
											</div>
											<div className="_timline_comment_main">
												<div className="_previous_comment">
													<button type="button" className="_previous_comment_txt">View 4 previous comments</button>
												</div>
												<div className="_comment_main">
													<div className="_comment_image">
														<a href="profile.html" className="_comment_image_link">
															<Image width={500} height={500} src="/assets/images/txt_img.png" alt="" className="_comment_img1" />
														</a>
													</div>
													<div className="_comment_area">
														<div className="_comment_details">
															<div className="_comment_details_top">
																<div className="_comment_name">
																	<a href="profile.html ">
																		<h4 className="_comment_name_title">Radovan SkillArena</h4>
																	</a>
																</div>
															</div>
															<div className="_comment_status">
																<p className="_comment_status_text"><span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </span></p>
															</div>
															<div className="_total_reactions">
																<div className="_total_react">
																<span className="_reaction_like">
																	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
																</span>
																	<span className="_reaction_heart">
																	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
																</span>
																</div>
																<span className="_total">
																198
															</span>
															</div>
															<div className="_comment_reply">
																<div className="_comment_reply_num">
																	<ul className="_comment_reply_list">
																		<li><span>Like.</span></li>
																		<li><span>Reply.</span></li>
																		<li><span>Share</span></li>
																		<li><span className="_time_link">.21m</span></li>
																	</ul>
																</div>
															</div>
														</div>
														<div className="_feed_inner_comment_box">
															<form className="_feed_inner_comment_box_form">
																<div className="_feed_inner_comment_box_content">
																	<div className="_feed_inner_comment_box_content_image">
																		<Image width={500} height={500} src="/assets/images/comment_img.png" alt="" className="_comment_img" />
																	</div>
																	<div className="_feed_inner_comment_box_content_txt">
																		<textarea className="form-control _comment_textarea" placeholder="Write a comment" id="floatingTextarea2"></textarea>
																	</div>
																</div>
																<div className="_feed_inner_comment_box_icon">
																	<button className="_feed_inner_comment_box_icon_btn">
																		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
																			<path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z" clipRule="evenodd"></path>
																		</svg>
																	</button>
																	<button className="_feed_inner_comment_box_icon_btn">
																		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
																			<path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z" clipRule="evenodd"></path>
																		</svg>
																	</button>
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16">
											<div className="_feed_inner_timeline_content _padd_r24 _padd_l24">
												<div className="_feed_inner_timeline_post_top">
													<div className="_feed_inner_timeline_post_box">
														<div className="_feed_inner_timeline_post_box_image">
															<Image width={500} height={500} src="/assets/images/post_img.png" alt="" className="_post_img" />
														</div>
														<div className="_feed_inner_timeline_post_box_txt">
															<h4 className="_feed_inner_timeline_post_box_title">Karim Saif</h4>
															<p className="_feed_inner_timeline_post_box_para">5 minute ago .
																<a href="#0">Public</a>
															</p>
														</div>
													</div>
													<div className="_feed_inner_timeline_post_box_dropdown">
														<div className="_feed_timeline_post_dropdown">
															<button href="#0" className="_feed_timeline_post_dropdown_link">
																<svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" fill="none" viewBox="0 0 4 17">
																	<circle cx="2" cy="2" r="2" fill="#C4C4C4" />
																	<circle cx="2" cy="8" r="2" fill="#C4C4C4" />
																	<circle cx="2" cy="15" r="2" fill="#C4C4C4" />
																</svg>
															</button>
														</div>
														<div  className="_feed_timeline_dropdown">
															<ul className="_feed_timeline_dropdown_list">
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14.25 15.75L9 12l-5.25 3.75v-12a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v12z"/>
																		</svg>
																	</span>
																		Save Post
																	</a>
																</li>
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none" viewBox="0 0 20 22">
																			<path fill="#377DFF" fillRule="evenodd" d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z" clipRule="evenodd"/>
																		</svg>
																	</span>
																		Turn On Notification
																	</a>
																</li>
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14.25 2.25H3.75a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zM6.75 6.75l4.5 4.5M11.25 6.75l-4.5 4.5"/>
																		</svg>
																	</span>
																		Hide
																	</a>
																</li>
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M8.25 3H3a1.5 1.5 0 00-1.5 1.5V15A1.5 1.5 0 003 16.5h10.5A1.5 1.5 0 0015 15V9.75"/>
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13.875 1.875a1.591 1.591 0 112.25 2.25L9 11.25 6 12l.75-3 7.125-7.125z"/>
																		</svg>
																	</span>
																		Edit Post
																	</a>
																</li>
																<li className="_feed_timeline_dropdown_item">
																	<a href="#0" className="_feed_timeline_dropdown_link">
																	<span>
																		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
																			<path stroke="#1890FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5m2.25 0V15a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5h10.5zM7.5 8.25v4.5M10.5 8.25v4.5"/>
																		</svg>
																	</span>
																		Delete Post
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<h4 className="_feed_inner_timeline_post_title">-Healthy Tracking App</h4>
												<div className="_feed_inner_timeline_image">
													<Image width={500} height={500} src="/assets/images/timeline_img.png" alt="" className="_time_img" />
												</div>
											</div>
											<div className="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26">
												<div className="_feed_inner_timeline_total_reacts_image">
													<Image width={500} height={500} src="/assets/images/react_img1.png" alt="Image" className="_react_img1" />
														<Image width={500} height={500} src="/assets/images/react_img2.png" alt="Image" className="_react_img" />
															<Image width={500} height={500} src="/assets/images/react_img3.png" alt="Image" className="_react_img _rect_img_mbl_none" />
																<Image width={500} height={500} src="/assets/images/react_img4.png" alt="Image" className="_react_img _rect_img_mbl_none" />
																	<Image width={500} height={500} src="/assets/images/react_img5.png" alt="Image" className="_react_img _rect_img_mbl_none" />
																		<p className="_feed_inner_timeline_total_reacts_para">9+</p>
												</div>
												<div className="_feed_inner_timeline_total_reacts_txt">
													<p className="_feed_inner_timeline_total_reacts_para1"><span>12</span> Comment</p>
													<p className="_feed_inner_timeline_total_reacts_para2"><span>122</span> Share</p>
												</div>
											</div>
											<div className="_feed_inner_timeline_reaction">
												<button className="_feed_inner_timeline_reaction_emoji _feed_reaction _feed_reaction_active">
												<span className="_feed_inner_timeline_reaction_link"> <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19">
                                                        <path fill="#FFCC4D" d="M9.5 19a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"></path>
                                                        <path fill="#664500" d="M9.5 11.083c-1.912 0-3.181-.222-4.75-.527-.358-.07-1.056 0-1.056 1.055 0 2.111 2.425 4.75 5.806 4.75 3.38 0 5.805-2.639 5.805-4.75 0-1.055-.697-1.125-1.055-1.055-1.57.305-2.838.527-4.75.527z"></path>
                                                        <path fill="#fff" d="M4.75 11.611s1.583.528 4.75.528 4.75-.528 4.75-.528-1.056 2.111-4.75 2.111-4.75-2.11-4.75-2.11z"></path>
                                                        <path fill="#664500" d="M6.333 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847zM12.667 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847z"></path>
                                                      </svg>
                                                      Haha
                                                   </span>
												</span>
												</button>
												<button className="_feed_inner_timeline_reaction_comment _feed_reaction">
												<span className="_feed_inner_timeline_reaction_link"> <span>
                                                    <svg className="_reaction_svg" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                                                        <path stroke="#000" d="M1 10.5c0-.464 0-.696.009-.893A9 9 0 019.607 1.01C9.804 1 10.036 1 10.5 1v0c.464 0 .696 0 .893.009a9 9 0 018.598 8.598c.009.197.009.429.009.893v6.046c0 1.36 0 2.041-.317 2.535a2 2 0 01-.602.602c-.494.317-1.174.317-2.535.317H10.5c-.464 0-.696 0-.893-.009a9 9 0 01-8.598-8.598C1 11.196 1 10.964 1 10.5v0z"></path>
                                                        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M6.938 9.313h7.125M10.5 14.063h3.563"></path>
                                                    </svg>
                                                   Comment
                                                </span>
											</span>
												</button>
												<button className="_feed_inner_timeline_reaction_share _feed_reaction">
												<span className="_feed_inner_timeline_reaction_link"> <span>
                                                    <svg className="_reaction_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="none" viewBox="0 0 24 21">
                                                        <path stroke="#000" strokeLinejoin="round" d="M23 10.5L12.917 1v5.429C3.267 6.429 1 13.258 1 20c2.785-3.52 5.248-5.429 11.917-5.429V20L23 10.5z"></path>
                                                    </svg>
                                                    
                                                   Share
                                                </span>
											</span>
												</button>
											</div>
											<div className="_feed_inner_timeline_cooment_area">
												<div className="_feed_inner_comment_box">
													<form className="_feed_inner_comment_box_form">
														<div className="_feed_inner_comment_box_content">
															<div className="_feed_inner_comment_box_content_image">
																<Image width={500} height={500} src="/assets/images/comment_img.png" alt="" className="_comment_img" />
															</div>
															<div className="_feed_inner_comment_box_content_txt">
																<textarea className="form-control _comment_textarea" placeholder="Write a comment" id="floatingTextarea1"></textarea>
															</div>
														</div>
														<div className="_feed_inner_comment_box_icon">
															<button className="_feed_inner_comment_box_icon_btn">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
																	<path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z" clipRule="evenodd" />
																</svg>
															</button>
															<button className="_feed_inner_comment_box_icon_btn">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
																	<path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z" clipRule="evenodd" />
																</svg>
															</button>
														</div>
													</form>
												</div>
											</div>
											<div className="_timline_comment_main">
												<div className="_previous_comment">
													<button type="button" className="_previous_comment_txt">View 4 previous comments</button>
												</div>
												<div className="_comment_main">
													<div className="_comment_image">
														<a href="profile.html" className="_comment_image_link">
															<Image width={500} height={500} src="/assets/images/txt_img.png" alt="" className="_comment_img1" />
														</a>
													</div>
													<div className="_comment_area">
														<div className="_comment_details">
															<div className="_comment_details_top">
																<div className="_comment_name">
																	<a href="profile.html ">
																		<h4 className="_comment_name_title">Radovan SkillArena</h4>
																	</a>
																</div>
															</div>
															<div className="_comment_status">
																<p className="_comment_status_text"><span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </span></p>
															</div>
															<div className="_total_reactions">
																<div className="_total_react">
																<span className="_reaction_like">
																	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
																</span>
																	<span className="_reaction_heart">
																	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
																</span>
																</div>
																<span className="_total">
																198
															</span>
															</div>
															<div className="_comment_reply">
																<div className="_comment_reply_num">
																	<ul className="_comment_reply_list">
																		<li><span>Like.</span></li>
																		<li><span>Reply.</span></li>
																		<li><span>Share</span></li>
																		<li><span className="_time_link">.21m</span></li>
																	</ul>
																</div>
															</div>
														</div>
														<div className="_feed_inner_comment_box">
															<form className="_feed_inner_comment_box_form">
																<div className="_feed_inner_comment_box_content">
																	<div className="_feed_inner_comment_box_content_image">
																		<Image width={500} height={500} src="/assets/images/comment_img.png" alt="" className="_comment_img" />
																	</div>
																	<div className="_feed_inner_comment_box_content_txt">
																		<textarea className="form-control _comment_textarea" placeholder="Write a comment" id="floatingTextarea2"></textarea>
																	</div>
																</div>
																<div className="_feed_inner_comment_box_icon">
																	<button className="_feed_inner_comment_box_icon_btn">
																		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
																			<path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z" clipRule="evenodd"></path>
																		</svg>
																	</button>
																	<button className="_feed_inner_comment_box_icon_btn">
																		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
																			<path fill="#000" fillOpacity=".46" fillRule="evenodd" d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z" clipRule="evenodd"></path>
																		</svg>
																	</button>
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
								<div className="_layout_right_sidebar_wrap">
									<div className="_layout_right_sidebar_inner">
										<div className="_right_inner_area_info _padd_t24  _padd_b24 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
											<div className="_right_inner_area_info_content _mar_b24">
												<h4 className="_right_inner_area_info_content_title _title5">You Might Like</h4>
												<span className="_right_inner_area_info_content_txt">
                                                <a className="_right_inner_area_info_content_txt_link" href="#0">See All</a>
                                            </span>
											</div>
											<hr className="_underline" />
												<div className="_right_inner_area_info_ppl">
													<div className="_right_inner_area_info_box">
														<div className="_right_inner_area_info_box_image">
															<a href="profile.html">
																<Image width={500} height={500} src="/assets/images/Avatar.png" alt="Image" className="_ppl_img" />
															</a>
														</div>
														<div className="_right_inner_area_info_box_txt">
															<a href="profile.html">
																<h4 className="_right_inner_area_info_box_title">Radovan SkillArena</h4>
															</a>
															<p className="_right_inner_area_info_box_para">Founder & CEO at Trophy</p>
														</div>
													</div>
													<div className="_right_info_btn_grp">
														<button type="button" className="_right_info_btn_link">Ignore</button>
														<button type="button" className="_right_info_btn_link _right_info_btn_link_active">Follow</button>
													</div>
												</div>
										</div>
										
									</div>
									<div className="_layout_right_sidebar_inner">
										<div className="_feed_right_inner_area_card  _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
											<div className="_feed_top_fixed">
												<div className="_feed_right_inner_area_card_content _mar_b24">
													<h4 className="_feed_right_inner_area_card_content_title _title5">Your Friends</h4>
													<span className="_feed_right_inner_area_card_content_txt">
													<a className="_feed_right_inner_area_card_content_txt_link" href="find-friends.html">See All</a>
												</span>
												</div>
												<form className="_feed_right_inner_area_card_form">
													<svg className="_feed_right_inner_area_card_form_svg" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
														<circle cx="7" cy="7" r="6" stroke="#666"></circle>
														<path stroke="#666" strokeLinecap="round" d="M16 16l-3-3"></path>
													</svg>
													<input className="form-control me-2 _feed_right_inner_area_card_form_inpt" type="search" placeholder="input search text" aria-label="Search" />
												</form>
											</div>
											<div className="_feed_bottom_fixed">
												
												<div className="_feed_right_inner_area_card_ppl _feed_right_inner_area_card_ppl_inactive ">
													<div className="_feed_right_inner_area_card_ppl_box">
														<div className="_feed_right_inner_area_card_ppl_image">
															<a href="profile.html">
																<Image width={500} height={500} src="/assets/images/people1.png" alt="" className="_box_ppl_img" />
															</a>
														</div>
														<div className="_feed_right_inner_area_card_ppl_txt">
															<a href="profile.html">
																<h4 className="_feed_right_inner_area_card_ppl_title">Steve Jobs</h4>
															</a>
															<p className="_feed_right_inner_area_card_ppl_para">CEO of Apple</p>
														</div>
													</div>
													<div className="_feed_right_inner_area_card_ppl_side"> <span>5 minute ago</span>
													</div>
												</div>
												<div className="_feed_right_inner_area_card_ppl">
													<div className="_feed_right_inner_area_card_ppl_box">
														<div className="_feed_right_inner_area_card_ppl_image">
															<a href="profile.html">
																<Image width={500} height={500} src="/assets/images/people2.png" alt="" className="_box_ppl_img" />
															</a>
														</div>
														<div className="_feed_right_inner_area_card_ppl_txt">
															<a href="profile.html">
																<h4 className="_feed_right_inner_area_card_ppl_title">Ryan Roslansky</h4>
															</a>
															<p className="_feed_right_inner_area_card_ppl_para">CEO of Linkedin</p>
														</div>
													</div>
													<div className="_feed_right_inner_area_card_ppl_side">
														<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
															<rect width="12" height="12" x="1" y="1" fill="#0ACF83" stroke="#fff" strokeWidth="2" rx="6" />
														</svg>
													</div>
												</div>
												<div className="_feed_right_inner_area_card_ppl">
													<div className="_feed_right_inner_area_card_ppl_box">
														<div className="_feed_right_inner_area_card_ppl_image">
															<a href="profile.html">
																<Image width={500} height={500} src="/assets/images/people3.png" alt="" className="_box_ppl_img" />
															</a>
														</div>
														<div className="_feed_right_inner_area_card_ppl_txt">
															<a href="profile.html">
																<h4 className="_feed_right_inner_area_card_ppl_title">Dylan Field</h4>
															</a>
															<p className="_feed_right_inner_area_card_ppl_para">CEO of Figma</p>
														</div>
													</div>
													<div className="_feed_right_inner_area_card_ppl_side">
														<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
															<rect width="12" height="12" x="1" y="1" fill="#0ACF83" stroke="#fff" strokeWidth="2" rx="6" />
														</svg>
													</div>
												</div>
												<div className="_feed_right_inner_area_card_ppl _feed_right_inner_area_card_ppl_inactive">
													<div className="_feed_right_inner_area_card_ppl_box">
														<div className="_feed_right_inner_area_card_ppl_image">
															<a href="profile.html">
																<Image width={500} height={500} src="/assets/images/people1.png" alt="" className="_box_ppl_img" />
															</a>
														</div>
														<div className="_feed_right_inner_area_card_ppl_txt">
															<a href="profile.html">
																<h4 className="_feed_right_inner_area_card_ppl_title">Steve Jobs</h4>
															</a>
															<p className="_feed_right_inner_area_card_ppl_para">CEO of Apple</p>
														</div>
													</div>
													<div className="_feed_right_inner_area_card_ppl_side"> <span>5 minute ago</span>
													</div>
												</div>
												<div className="_feed_right_inner_area_card_ppl">
													<div className="_feed_right_inner_area_card_ppl_box">
														<div className="_feed_right_inner_area_card_ppl_image">
															<a href="profile.html">
																<Image width={500} height={500} src="/assets/images/people2.png" alt="" className="_box_ppl_img" />
															</a>
														</div>
														<div className="_feed_right_inner_area_card_ppl_txt">
															<a href="profile.html">
																<h4 className="_feed_right_inner_area_card_ppl_title">Ryan Roslansky</h4>
															</a>
															<p className="_feed_right_inner_area_card_ppl_para">CEO of Linkedin</p>
														</div>
													</div>
													<div className="_feed_right_inner_area_card_ppl_side">
														<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
															<rect width="12" height="12" x="1" y="1" fill="#0ACF83" stroke="#fff" strokeWidth="2" rx="6" />
														</svg>
													</div>
												</div>
												<div className="_feed_right_inner_area_card_ppl">
													<div className="_feed_right_inner_area_card_ppl_box">
														<div className="_feed_right_inner_area_card_ppl_image">
															<a href="profile.html">
																<Image width={500} height={500} src="/assets/images/people3.png" alt="" className="_box_ppl_img" />
															</a>
														</div>
														<div className="_feed_right_inner_area_card_ppl_txt">
															<a href="profile.html">
																<h4 className="_feed_right_inner_area_card_ppl_title">Dylan Field</h4>
															</a>
															<p className="_feed_right_inner_area_card_ppl_para">CEO of Figma</p>
														</div>
													</div>
													<div className="_feed_right_inner_area_card_ppl_side">
														<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
															<rect width="12" height="12" x="1" y="1" fill="#0ACF83" stroke="#fff" strokeWidth="2" rx="6" />
														</svg>
													</div>
												</div>
												<div className="_feed_right_inner_area_card_ppl">
													<div className="_feed_right_inner_area_card_ppl_box">
														<div className="_feed_right_inner_area_card_ppl_image">
															<a href="profile.html">
																<Image width={500} height={500} src="/assets/images/people3.png" alt="" className="_box_ppl_img" />
															</a>
														</div>
														<div className="_feed_right_inner_area_card_ppl_txt">
															<a href="profile.html">
																<h4 className="_feed_right_inner_area_card_ppl_title">Dylan Field</h4>
															</a>
															<p className="_feed_right_inner_area_card_ppl_para">CEO of Figma</p>
														</div>
													</div>
													<div className="_feed_right_inner_area_card_ppl_side">
														<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14">
															<rect width="12" height="12" x="1" y="1" fill="#0ACF83" stroke="#fff" strokeWidth="2" rx="6" />
														</svg>
													</div>
												</div>
												<div className="_feed_right_inner_area_card_ppl _feed_right_inner_area_card_ppl_inactive">
													<div className="_feed_right_inner_area_card_ppl_box">
														<div className="_feed_right_inner_area_card_ppl_image">
															<a href="profile.html">
																<Image width={500} height={500} src="/assets/images/people1.png" alt="" className="_box_ppl_img" />
															</a>
														</div>
														<div className="_feed_right_inner_area_card_ppl_txt">
															<a href="profile.html">
																<h4 className="_feed_right_inner_area_card_ppl_title">Steve Jobs</h4>
															</a>
															<p className="_feed_right_inner_area_card_ppl_para">CEO of Apple</p>
														</div>
													</div>
													<div className="_feed_right_inner_area_card_ppl_side"> <span>5 minute ago</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}