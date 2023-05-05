import Logo from '@/assets/Logo.png'

type Props = {}

const Footer = (props: Props) => {
	return (
		<footer className='bg-primary-100 py-16'>
			<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
				<div className='mt-16 basis-1/2 md:mt-0'>
					<img src={Logo} alt="logo" />
					<p className="my-5">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam deserunt et velit iusto. Veritatis, optio.
					</p>
					<p className="">&copy; Evogym All rights Reserved</p>
				</div>
				<div className='mt-16 basis-1/4 md:mt-0'>
					<h4 className='font-bold'>Links</h4>
					<p className="my-5">Lorem ipsum dolor sit</p>
					<p className="my-5">Lorem, ipsum dolor.</p>
					<p className="my-5">Dolor sit amet consectetur adipisicing</p>
				</div>
				<div className='mt-16 basis-1/4 md:mt-0'>
					<h4 className='font-bold'>Contact Us</h4>
					<p className="my-5">email@example.com</p>
					<p className="my-5">(+254) 733 000 000</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer