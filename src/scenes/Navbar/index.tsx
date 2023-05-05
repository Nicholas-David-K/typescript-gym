import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png'
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';


type Props = {
	isTopOfPage: boolean;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
	const flexBetween = "flex justify-between items-center"
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

	const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

	return (
		<nav>
			<div className={`${navbarBackground}  ${flexBetween} fixed top-0 z-30 w-full py-6`}>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>

						{/* LEFT SIDE */}
						<img alt='logo' src={Logo} />

						{/* RIGHT SIDE */}
						{isAboveMediumScreens ? (
							<div className={`${flexBetween} w-full`}>

								<div className={`${flexBetween} gap-8 text-sm`}>
									<Link
										page='Home'
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page='Benefits'
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page='Our classes'
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page='Contact Us'
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								</div>
								<div className={`${flexBetween} gap-8 text-sm`}>
									<p>Sign in</p>
									<ActionButton
										setSelectedPage={setSelectedPage}>
										Become a member
									</ActionButton>
								</div>
							</div>
						) : (
							<button
								onClick={() => setIsMenuToggled(!isMenuToggled)}
								className='rounded-full bg-secondary-500 p-2 transition duration-1000'>
								<Bars3Icon className='w-6 h-6 text-sm' />
							</button>
						)}

					</div>
				</div>
			</div>

			{/* MOBILE MENU MODAL */}
			{!isAboveMediumScreens && isMenuToggled && (
				<div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'
				>
					{/* CLOSE ICON */}
					<div className='flex justify-end p-12'>
						<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
							<XMarkIcon className='h-6 w-6 text-gray-400' />
						</button>
					</div>

					{/* MENU ITEMS */}
					<div className="ml-[20%] flex flex-col gap-5 text-1xl">
						<Link
							page='Home'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Benefits'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Our classes'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Contact Us'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>

						<div>
							<ActionButton
								setSelectedPage={setSelectedPage}>
								Become a member
							</ActionButton>
						</div>

					</div>


				</div>
			)}
		</nav>
	)
}

export default Navbar