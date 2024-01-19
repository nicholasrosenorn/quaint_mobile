import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

const tasks = [
	  {
		"id": "1",
		"action": "Clean out and organize your email inbox by archiving or deleting unnecessary messages. This reduces email clutter, improves focus, helps find important messages easily, and ensures that your inbox is a more efficient communication tool."
	  },
	  {
		"id": "2",
		"action": "Sort through your wardrobe and donate clothes you no longer wear. Donating clothes you no longer wear not only declutters your living space but also contributes to a more sustainable and organized wardrobe."
	  },
	  {
		"id": "3",
		"action": "Create a list of unused or unnecessary apps on your phone and delete them. Removing unused apps not only frees up storage space but also streamlines your device, making it more responsive and easier to navigate."
	  },
	  {
		"id": "4",
		"action": "Organize your computer files into folders and delete duplicates or irrelevant documents. Organizing digital files enhances productivity, makes it easier to locate important documents, and improves overall system performance."
	  },
	  {
		"id": "5",
		"action": "Clear your desk or workspace of unnecessary items and organize essential supplies. A clutter-free workspace promotes better concentration, reduces stress, and increases overall efficiency in completing tasks."
	  },
	  {
		"id": "6",
		"action": "Unsubscribe from email newsletters and notifications that you no longer find useful. Reducing email subscriptions minimizes distractions, helps prioritize important communications, and ensures a cleaner and more manageable inbox."
	  },
	  {
		"id": "7",
		"action": "Review your social media accounts and unfollow or declutter connections that no longer align with your interests. Streamlining your social media connections improves the quality of your feed, reduces information overload, and helps maintain a more meaningful online presence."
	  },
	  {
		"id": "8",
		"action": "Set up a system for managing and organizing your daily tasks and to-do lists. Organizing tasks enhances productivity, reduces the risk of forgetting important activities, and helps create a sense of accomplishment as you complete each task."
	  },
	  {
		"id": "9",
		"action": "Go through your bookshelf and donate or give away books you no longer need or want. Donating books not only creates space but also ensures that your collection consists of books that are meaningful and relevant to your current interests."
	  },
	  {
		"id": "10",
		"action": "Perform a digital detox by taking a break from screens for a specific period each day. A digital detox promotes mental well-being, reduces screen time-related stress, and allows for more meaningful offline activities, fostering a healthier balance in your life."
	  }
	]
  

const getTask = () => {return tasks[Math.floor(Math.random() * tasks.length)].action};

function markCompletedTask(isCompletedTask, indexForTask) {
	return isCompletedTask.map((currElement, index) => {
		if (index === indexForTask) {
			return true;
		} else {
			return currElement;
		}
	})
}


function Task({backgroundPic, coreTask, isCompletedTask, setIsCompletedTask}) {
	if (coreTask === "Declutter") {
		if (isCompletedTask[0]) {
			return (
				<TouchableOpacity style={styles.taskContainer} disabled={isCompletedTask[0]} onPress={() => setIsCompletedTask(markCompletedTask(isCompletedTask, 0))}>
					<ImageBackground source={backgroundPic} resizeMode="cover" style = {[styles.imageContainer, {backgroundColor: "#191919"}]} imageStyle={styles.image}>
						<View style={styles.taskRow}>
							<Text style = {[styles.taskHeaderText, {color: "grey"}] }>{coreTask}</Text>	
							<Feather name="check-circle" size={35} color="grey" />
						</View>
					</ImageBackground>
				</TouchableOpacity>
			);
		} else {
			return (
				<Link href="/DeclutterModal" asChild>
					<TouchableOpacity style={styles.taskContainer} disabled={isCompletedTask[0]} onPress={() => setIsCompletedTask(markCompletedTask(isCompletedTask, 0))}>
						<ImageBackground source={backgroundPic} resizeMode="cover" style = {styles.imageContainer} imageStyle={styles.image}>
							<View style={styles.taskRow}>
								<Text style = {styles.taskHeaderText}>{coreTask}</Text>	
								<Feather name="circle" size={35} color="#fbfbfb" />
							</View>
						</ImageBackground>
					</TouchableOpacity>
				</Link>
			);
		}
	} else if (coreTask === "Mindfulness") {
		if (isCompletedTask[1]) {
			return (
				<TouchableOpacity style={styles.taskContainer} disabled={isCompletedTask[1]} onPress={() => setIsCompletedTask(markCompletedTask(isCompletedTask, 1))}>
					<ImageBackground source={backgroundPic} resizeMode="cover" style = {[styles.imageContainer, {backgroundColor: "#191919"}]} imageStyle={styles.image}>
						<View style={styles.taskRow}>
							<Text style = {[styles.taskHeaderText, {color: "grey"}] }>{coreTask}</Text>	
							<Feather name="check-circle" size={35} color="grey" />
						</View>
					</ImageBackground>
				</TouchableOpacity>
			);
		} else {
			return (
				<Link href="/MindfulnessModal" asChild>
					<TouchableOpacity style={styles.taskContainer} disabled={isCompletedTask[1]} onPress={() => setIsCompletedTask(markCompletedTask(isCompletedTask, 1))}>
						<ImageBackground source={backgroundPic} resizeMode="cover" style = {styles.imageContainer} imageStyle={styles.image}>
							<View style={styles.taskRow}>
								<Text style = {styles.taskHeaderText}>{coreTask}</Text>	
								<Feather name="circle" size={35} color="#fbfbfb" />
							</View>
						</ImageBackground>
					</TouchableOpacity>
				</Link>
			);
		}

	} else if (coreTask === "Ventures") {
		if (isCompletedTask[2]) {
			return (
				<TouchableOpacity style={styles.taskContainer} disabled={isCompletedTask[2]} onPress={() => setIsCompletedTask(markCompletedTask(isCompletedTask, 2))}>
					<ImageBackground source={backgroundPic} resizeMode="cover" style = {[styles.imageContainer, {backgroundColor: "#191919"}]} imageStyle={styles.image}>
						<View style={styles.taskRow}>
							<Text style = {[styles.taskHeaderText, {color: "grey"}] }>{coreTask}</Text>	
							<Feather name="check-circle" size={35} color="grey" />
						</View>
					</ImageBackground>
				</TouchableOpacity>
			);
		} else {
			return (
				<TouchableOpacity style={styles.taskContainer} disabled={isCompletedTask[2]} onPress={() => setIsCompletedTask(markCompletedTask(isCompletedTask, 2))}>
					<ImageBackground source={backgroundPic} resizeMode="cover" style = {styles.imageContainer} imageStyle={styles.image}>
						<View style={styles.taskRow}>
							<Text style = {styles.taskHeaderText}>{coreTask}</Text>	
							<Feather name="circle" size={35} color="#fbfbfb" />
						</View>
					</ImageBackground>
				</TouchableOpacity>
			);
		}

	}
}


export default function BodyInfo({isCompletedTask, setIsCompletedTask}) {
	//const [task, setTask] = useState(getTask());
	const colorScheme = useColorScheme();

  return (
	<View style={styles.BodyInfoContainer}>
		<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
		<View style={styles.BodyInfoHeaderContainer}>
			<Text style = {styles.BodyInfoHeader}>Daily Tasks  <FontAwesome5 name="lightbulb" size={20} color={Colors[colorScheme ?? 'light'].text} /> </Text>
		</View>
		<View style = {styles.tasksContainer}>
			<Task isCompletedTask={isCompletedTask} setIsCompletedTask={setIsCompletedTask} backgroundPic={require("../../assets/images/declutter_background.jpg")} coreTask={"Declutter"}/>
			<Task isCompletedTask={isCompletedTask} setIsCompletedTask={setIsCompletedTask} backgroundPic={require("../../assets/images/mindfulness_background.jpg")} coreTask={"Mindfulness"}/>
			<Task isCompletedTask={isCompletedTask} setIsCompletedTask={setIsCompletedTask} backgroundPic={require("../../assets/images/ventures_background.jpg")} coreTask={"Ventures"}/>
		</View>
		<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

	</View>
  );
}

const styles = StyleSheet.create({
	BodyInfoContainer: {
		width: '90%',
		borderRadius: 30,
		flex: 2.5,
		marginLeft: '5%',
		marginRight: '5%',
	},
	BodyInfoHeader: {
		fontSize: 20,
		marginTop: '2%',
	},
	separator: {
		marginVertical: 10,
		height: 1,
		width: '100%',
		justifyContent: 'center',
	  },
	BodyInfoHeaderContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	  },
	imageContainer:{
		justifyContent: 'center',
		flex: 1,
		backgroundColor: '#474340',
		borderRadius: 20,
	},
	image: {
		opacity: 0.28,
		borderRadius: 20,
	  },
	taskContainer: {
		flex: .3,
		marginTop: '2%',
		marginBottom: '2%',
		justifyContent: 'center',
	},
	taskHeaderText :{
		fontSize: 30,
		fontWeight: '500',
		textAlign: 'left',
		marginLeft: '5%',
		color: '#fbfbfb',
	},
	tasksContainer: {
		flex: 1,
		marginTop: '2%',
		justifyContent: 'center',
	}, 
	taskRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginRight: '5%',
		backgroundColor: null,
	}
  });
  