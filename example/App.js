import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TagSelector from 'react-native-tag-selector';


export default class App extends Component {

	tags = [
		{
			id: 'the',
			name: 'the'
		},
		{
			id: 'quick',
			name: 'quick'
		},
		{
			id: 'brown',
			name: 'brown'
		},
		{
			id: 'fox',
			name: 'fox'
		},
		{
			id: 'jumps',
			name: 'jumps'
		},
		{
			id: 'over',
			name: 'over'
		},
		{
			id: 'the2',
			name: 'the'
		},
		{
			id: 'lazy',
			name: 'lazy'
		},
		{
			id: 'dog',
			name: 'dog'
		},

	]

	constructor(props) {
		super(props);
		this.state = {
			selectedTags: []
		}
	}

	render() {
		return (

			<View style={styles.container}>
				<Text> Selected tags: {this.state.selectedTags.map(tag => `${tag} `)}</Text>
				<View style={styles.selectorContainer}>
					<TagSelector
						maxHeight={70}
						tags={this.tags}
						onChange={(selected) => this.setState({ selectedTags: selected })} />
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	selectorContainer: {
		padding: 50,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});