import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
export default function MySlider({ slides }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,

		customPaging: (dots) => <div></div>,
	}
	return (
		<div>
			<Slider {...settings}>
				{slides.map((item) => (
					<>
						<div
							style={{
								margin: '0 auto',
								backgroundImage: `url(${item.url})`,
								backgroundSize: 'cover',
								width: '100%',
								height: '730px',
							}}
						></div>
						<div>{item.title}</div>
					</>
				))}
			</Slider>
		</div>
	)
}
function SampleNextArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'end',
			}}
			className='container'
		>
			<div
				style={{
					position: 'absolute',
					zIndex: '130',
					top: '50%',
					display: 'block',
					background: 'red',
				}}
				onClick={onClick}
			>
				000
			</div>
		</div>
	)
}
function SamplePrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<div className='container'>
			<div
				style={{
					position: 'absolute',
					zIndex: '100',
					top: '50%',
					color: 'black',
					background: 'red',
				}}
				onClick={onClick}
			>
				gggg
			</div>
		</div>
	)
}
