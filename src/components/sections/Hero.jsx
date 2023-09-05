import MySlider from './Slider'

export const Hero = () => {
	const slides = [
		{
			id: 1,
			url: '../../../public/images/1.jpg',
			title: 'Збір на 57 бригаду, котрі беруть участь в найзапекліших боях',
		},
		{
			id: 2,
			url: '../../../public/images/5.jpg',
			title: 'Збір на 57 бригаду, котрі беруть участь в найзапекліших боях',
		},
		{
			id: 3,
			url: '../../../public/images/7.jpg',
			title: 'Збір на 57 бригаду, котрі беруть участь в найзапекліших боях',
		},
		{
			id: 4,
			url: '../../../public/images/8.jpg',
			title: 'Збір на 57 бригаду, котрі беруть участь в найзапекліших боях',
		},
	]

	return (
		<div className='hero'>
			<MySlider slides={slides} />
		</div>
	)
}
