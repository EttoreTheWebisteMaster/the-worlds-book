import { Box } from '@mui/material';

import styles from './static/css/page.module.css';

import Title from './components/home/Title';
import Text from './components/home/Text';
import ButtonPrimary from './components/buttons/ButtonPrimary';
import ButtonSecondary from './components/buttons/ButtonSecondary';
import Timeline from './components/home/TimelineElement';
import TextLong from './components/home/TextLong';

import DrawSharpIcon from '@mui/icons-material/DrawSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import PaymentsSharpIcon from '@mui/icons-material/PaymentsSharp';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import PermPhoneMsgSharpIcon from '@mui/icons-material/PermPhoneMsgSharp';

export default function Home() {
	return (
		<Box className={styles.container}>
			<Title value='A Story Written by the World for the World' />
			<Text
				value={
					<>
						Welcome to The World&#39;s Book - where{' '}
						<b>creativity has no borders</b>. Add your voice to an
						evolving narrative <b>built by storytellers</b> from{' '}
						<b>across the globe</b>. Write a paragraph, start a
						chapter, or watch as the story grows.
					</>
				}
			/>

			<Box margin={'5em 0'}>
				<ButtonPrimary fullWidth endIcon={<DrawSharpIcon />}>
					Start Writing
				</ButtonPrimary>
				<ButtonSecondary fullWidth endIcon={<LocalLibrarySharpIcon />}>
					Read the book
				</ButtonSecondary>
			</Box>

			<Title value='How to Contribute' />
			<Text
				value={
					<>
						Be a part of a <b>creative experiment</b> where the{' '}
						<b>global community</b> writes a story together, one
						paragraph at a time. Use your <b>Writer&#39;s Tokens</b>{' '}
						to contribute in different ways.
					</>
				}
			/>

			<Box className={styles.timelineContainer}>
				<Timeline
					title='Sign up'
					subtitle='Register to join the global community of writers'
					icon={<LoginSharpIcon />}
				/>
				<Timeline
					title='Get 12 free Writer&#39;s Tokens'
					subtitle='Your currency for interaction. Complete missions to gain other tokens'
					icon={<PaymentsSharpIcon />}
				/>
				<Timeline
					title='Write, Remove, or Create'
					subtitle='Use your tokens to add and remove paragraphs or start new chapters. Have fun!'
					icon={<MenuBookSharpIcon />}
				/>
			</Box>

			<Title value='How the game works' />

			<TextLong
				title='Action-Based Ranking System'
				description={
					<>
						Your rank on &#34;The World&#39;s Book&#34; reflects
						your impact and contributions to the global narrative.{' '}
						<b>Every action</b> — whether it&#39;s adding content,
						interacting with others, or modifying existing work —{' '}
						<b>affects your score</b>, pushing you higher or lower
						on the leaderboard. At the end of the game both the{' '}
						<b>top-ranked</b> user and the <b>last-ranked</b> user{' '}
						<b>receive a fantastic prize</b>, ensuring that even the
						lowest scorer remains part of the excitement.
					</>
				}
				details={
					<>
						<br />
						<ul className={styles.bulletList}>
							<li>
								<b>Likes Received</b>: Earn{' '}
								<b>+3 points per like</b> on your content.
							</li>

							<li>
								<b>Likes Given</b>: Gain{' '}
								<b>+1 point per like</b> you give to others.
							</li>

							<li>
								<b>Paragraphs Added</b>: Each new paragraph adds{' '}
								<b>+1 point</b>.
							</li>

							<li>
								<b>Chapters Added</b>: Starting a new chapter
								awards <b>+50 points</b>.
							</li>

							<li>
								<b>Chapters Modified</b>: Editing an existing
								chapter costs <b>-50 points</b>.
							</li>

							<li>
								<b>Paragraphs Removed</b>: Removing a paragraph
								deducts <b>-4 points per like</b> the paragraph
								had.
							</li>

							<li>
								<b>Fantastic Prizes</b>: At the designated end
								time, the user with the <b>highest score</b> and
								the user with the <b>lowest score</b> will both
								receive special prizes, ensuring that everyone
								has a chance to win!
							</li>
						</ul>
					</>
				}
			/>

			<TextLong
				title='Writer&#39;s Token Value'
				description={
					<>
						Writer&#39;s Tokens (WT) are the{' '}
						<b>platform&#39;s currency</b>, allowing users to
						perform various actions such as{' '}
						<b>adding or removing content</b>. The cost system is
						designed to <b>reflect the weight</b> of each action,
						balancing accessibility with responsibility. Whether
						you&#39;re adding a paragraph, removing a less popular
						one, or starting a new chapter, there&#39;s a{' '}
						<b>cost in WT</b> that aligns with the importance of the
						action.
					</>
				}
				details={
					<>
						<br />
						<ul className={styles.bulletList}>
							<li>
								<b>Add Paragraph</b>: Writing a new paragraph
								costs
								<b>1WT</b>, encouraging frequent contributions
								without overwhelming users.
							</li>
							<li>
								<b>Remove Paragraph</b>: The cost to remove a
								paragraph depends on its popularity, at{' '}
								<b>1WT per like</b>. The more liked the
								paragraph, the higher the cost to remove it,
								protecting popular contributions from arbitrary
								deletion.
							</li>
							<li>
								<b>Add Chapter</b>: Starting a new chapter
								requires a significant investment of{' '}
								<b>100WT</b>, reflecting the weight of steering
								the narrative in a new direction.
							</li>
							<li>
								<b>Modify Chapter</b>: Editing an existing
								chapter costs{' '}
								<b>100WT plus the number of paragraphs</b>{' '}
								within the chapter, ensuring that large
								modifications are considered carefully.
							</li>
						</ul>
					</>
				}
			/>

			<TextLong
				title='Missions and Rewards'
				description={
					<>
						Missions and rewards on "The World&#39;s Book" are
						designed to <b>keep users engaged and motivated</b>.
						Whether you're
						<b>receiving likes</b>, <b>giving support</b> to others,
						or <b>making meaningful contributions</b> to the story,
						you can <b>earn additional Writer's Tokens (WT)</b>{' '}
						through these actions. This system ensures that
						consistent and thoughtful participation is always
						rewarded.
					</>
				}
				details={
					<>
						<br />
						<ul className={styles.bulletList}>
							<li>
								<b>Daily Mission</b>: Earn <b>3WT</b> every day
								just for logging in and being active, ensuring
								you always have something to contribute, even if
								you don’t purchase additional tokens.
							</li>
							<li>
								<b>Invite a Friend</b>: Earn <b>10WT</b> for
								each friend you successfully invite to the
								platform, encouraging community growth.
							</li>
							<li>
								<b>Likes Received</b>: Receive WT rewards based
								on the number of likes your content receives.
							</li>
							<li>
								<b>Likes Given</b>: Show support to other
								writers by giving likes, and earn WT in return.
							</li>
							<li>
								<b>Paragraphs Added</b>: Earn WT rewards based
								on the number of paragraphs you add.
							</li>
							<li>
								<b>Paragraphs Removed</b>: Earn WT rewards for
								removing paragraphs, rewarding thoughtful
								editing of the narrative.
							</li>
						</ul>
					</>
				}
			/>

			<TextLong
				title='Writer&#39;s Token Pricing'
				description={
					<>
						Writer&#39;s Tokens (WT) <b>can be purchased</b> to
						increase your ability to interact with the platform.
						There are <b>several pricing tiers</b>, ranging from
						small, affordable packages for casual contributors to
						large bundles for serious participants. The pricing
						structure is designed to <b>offer flexibility</b>{' '}
						depending on your needs and level of engagement.
					</>
				}
				details={
					<>
						<br />
						<ul className={styles.bulletList}>
							<li>
								<b>10WT</b>: $0.99 – Ideal for quick
								contributions or casual users.
							</li>
							<li>
								<b>100WT</b>: $7.99 – A good choice for regular
								users who want to participate more actively.
							</li>
							<li>
								<b>500WT</b>: $39.99 – For those who want to
								regularly contribute chapters or make
								significant edits.
							</li>
							<li>
								<b>1,000WT</b>: $69.99 – Best for dedicated
								users who are shaping the story in meaningful
								ways.
							</li>
						</ul>
					</>
				}
			/>

			<Title value='A World of Writers' />

			<Text
				value={
					<>
						Join a <b>global community of storytellers</b>. Whether
						you're a <b>seasoned author</b>, a <b>beginner</b> or a{' '}
						<b>troll</b>, your voice matters. Discuss with everyone
						on how the story should <b>transform</b> and{' '}
						<b>evolve</b> on our discord server.
					</>
				}
			/>

			<br />

			<ButtonPrimary fullWidth endIcon={<PermPhoneMsgSharpIcon />}>
				Join the discord community
			</ButtonPrimary>
		</Box>
	);
}
