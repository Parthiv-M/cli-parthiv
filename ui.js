'use strict';
const React = require('react');
const { Text, Box, Newline } = require('ink');
const BigText = require('ink-big-text'); 
const Gradient = require('ink-gradient');
const Link  = require('ink-link');

// component for the skill card
const SkillCard = ({name}) => (
	<Box width="20%" borderColor="#708FFF" flexDirection="row" paddingY={1} justifyContent="center" alignItems="center" borderStyle="double">
		<Text color="#708FFF">{name}</Text>
	</Box>
);

const App = ({ gradient = "cristal" }) => (
	<>
		<Box width="100%" paddingX={6} paddingY={1} flexDirection="column">
			<Gradient name={gradient}>
				<BigText text="Parthiv Menon"></BigText>
			</Gradient>
			<Box width="100%" borderStyle="singleDouble" justifyContent="space-between" alignItems="center" borderColor="white" paddingX={2}>
				<Text color="white" bold>
					🗺 {" "}A CLI portfolio 
				</Text>
				<Text color="white" italic>
					Made with <Link url="https://www.npmjs.com/package/ink">Ink</Link>
				</Text>
			</Box>
			{/* an introduction */}
			<Box width="100%" paddingY={1} paddingX={2} marginY={1} flexDirection="column">
				<Box width="100%" marginY={1}>
					<Text>👦 </Text>
					<Text underline bold color="#FF3D00">About</Text>
				</Box>
				<Box>
					<Text color="#FF6A3B">
						I am Parthiv, a 21 year old from Kerala. I had a childhood filled with a generous mix of at least four languages—Hindi, English, Gujarathi, and Malayalam. 
						Consequently, when I am not immersed in some book or the other, I quietly muse about the plethora of reasons that make people tick.
						A big fan of Sherlock Holmes, I am a keen observer and a fast learner, willing to pick up anything that interests me, which, more often than not, 
						happens to be everything. Also, I love puns...especially ones that are pun-ishingly bad.
					</Text>
				</Box>
			</Box>
			{/* skills section */}
			<Box width="100%" paddingY={1} paddingX={2} flexDirection="column">
				<Box width="100%" marginY={1}>
					<Text>💻 </Text>
					<Text underline bold color="#4363D4">Skills</Text>
				</Box>
				<Box flexDirection="row" width="100%">
					{
						["C", "HTML/CSS/JS", "MERN stack", "SQL"].map((skill, index) => {
							return <SkillCard name={skill} key={index} />
						})
					}
				</Box>
				<Box flexDirection="row" width="100%">
					{
						["Figma", "Python", "Machine Learning"].map((skill, index) => {
							return <SkillCard name={skill} key={index} />
						})
					}
				</Box>
			</Box>
			{/* research section */}
			<Box width="100%" paddingY={1} paddingX={2} flexDirection="column">
				<Box width="100%" marginY={1}>
					<Text>🔍 </Text>
					<Text underline bold color="#8300ff">Research</Text>
				</Box>
				<Box>
					<Text color="#8300ff">
						I have experience working as a research collaborator at the undergraduate level. Working in the areas of 
						NLP and Brain Computing Interface, I have gained knowledge of data manipulation and processing in Python, 
						utilising ML techniques in various applications.
					</Text>
				</Box>
			</Box>
			{/* contact section */}
			<Box width="100%" paddingY={1} paddingX={2} flexDirection="column">
				<Box width="100%" marginY={1}>
					<Text>👥 </Text>
					<Text underline bold color="#F5DE0D">Get in Touch</Text>
				</Box>
				<Box flexDirection="column">
					<Text color="#F9E959">
						Check{" "}
						<Link url="https://parthivmenon.com">
							my <Text>website</Text>
						</Link>
						{" "} 🌐 
					</Text>
					<Text color="#F9E959">
						<Newline />
						Say{" "}
						<Link url="mailto:parthivmenon01@gmail.com">
							hello
						</Link>
						{" "} 📧 
					</Text>
				</Box>
			</Box>
		</Box>
	</>
);

module.exports = App;
