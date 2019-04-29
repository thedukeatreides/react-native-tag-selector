
[![npm version](https://badge.fury.io/js/react-native-tag-selector.svg)](https://badge.fury.io/js/react-native-tag-selector)

# react-native-tag-selector
Simple React Native tag selector control with folding of overwflowed tags

![screenshot_1](https://github.com/thedukeatreides/react-native-tag-selector/master/assets/demo.gif)

## Installation
```bash
$ npm i react-native-tag-selector --save
```

## Basic Usage
```jsx
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TagSelector from 'react-native-tag-selector';

class Example extends React.Component {

	tags = [
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
		}
	]

	constructor(props) {
		super(props);
		this.state = {
			selectedTags: []
		}
	}

	render() {
		return (
			<View>
				<Text>
					Selected: {this.state.selectedTags.map(tag => `${tag} `)}
				</Text>
				<TagSelector
					maxHeight={70}
					tags={this.tags}
					onChange={(selected) => this.setState({ selectedTags: selected })} />
			</View>
		);
	}
}
```

With all props: 
```jsx
<TagSelector
    maxHeight={70}
    expandCaptions={['more', 'less']}
    expdandedContainerStyle = {styles.containerExpanded}
    containerStyle = {styles.container}
    selectedTagStyle = {styles.tagSelected}
    tagStyle = {styles.tag}
    separatorStyle = {styles.separator}
    expandBtnStyle = {styles.btnStyle}
    expandTextStyle = {styles.btnText}
    tags={this.tags}
    onChange={ (selected) => this.setState({selectedTags: selected})} />
```

## Props

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| onChange | Function | \*required | callback on change with one (tagsSelected) param - array of selected tags' id |
| maxHeight | Array | 0 | max height of view to allow before appears 'more' text and folding functionality. 0 to disable folding and always show all tags |
| tags | Array | \*required | array of tags to render - objects of type {id: string, name: string} |
| expandCaptions | Array | ['more', 'less'] | array of expand captions - ['Show more', 'Show less'] |
| expdandedContainerStyle | style | - | style of expanded container |
| containerStyle | style | - | style of default container  |
| selectedTagStyle | style | - | selected tag style |
| tagStyle | style | - | default tag style |
| separatorStyle | style | - | separator between tags and expand button style |
| expandBtnStyle | style | - | expand button style |
| expandTextStyle | style | - | expand button text style |

## Contribution

- [@thedukeatreides](mailto:yuri.shaposhnik@gmail.com) The main author.