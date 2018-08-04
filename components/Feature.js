import Ionicon from 'react-ionicons';

export default ({ icon, title, text, children }) => (
	<div className="feature">
		<div className="feature-icon">
			{
				text ? <span>{text}</span> : <Ionicon icon={icon} fontSize="24px" color="black" />
			}
		</div>
		<h3>{title}</h3>
		<span>{children}</span>
		<style jsx>{`
			.feature {
				text-align: center;
				margin-bottom: 60px;
			}

			.feature-icon {
				width: 56px;
				height: 56px;
				border: 1px solid #ddd;
				border-radius: 50px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: auto;
			}
			.feature-icon span {
				font-size: 12px;
				font-weight: 800;
			}
			h3 {
				font-size: 14px;
				font-weight: 600;
				margin-top: 15px;
				margin-bottom: 7px;
			}
			span {
				font-size: 14px;
				font-weight: 400;
				color: #5a5a5a;
			}
		`}
		</style>
	</div>
);
