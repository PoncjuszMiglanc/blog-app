import '../assets/scss/components/the-footer.scss';

const TheFooter = () => {
	return (
		<>
			<footer className="footer">
				<p className="footer__paragraph">
					Teksty użyte w postach i podstronach zostały wygenerowane przez
					ChatGPT, a fotografie pochodzą z serwizu Unsplash. Szczególne
					podziękowania dla:
				</p>
				<div className="footer__bottom">
					<span>LOGO</span>
					<span>Crafted in Piechcin, Poland</span>
				</div>
			</footer>
		</>
	);
};

export default TheFooter;
