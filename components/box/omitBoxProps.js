import omit from 'lodash.omit';

const boxProps = [
	'alignContent',
	'alignItems',
	'alignSelf',
	'boxSizing',
	'children',
	'className',
	'display',
	'element',
	'flex',
	'flexBasis',
	'flexDirection',
	'flexGrow',
	'flexShrink',
	'flexWrap',
	'justifyContent',
	'margin',
	'marginHorizontal',
	'marginVertical',
	'marginBottom',
	'marginLeft',
	'marginRight',
	'marginTop',
	'order',
	'padding',
	'paddingHorizontal',
	'paddingVertical',
	'paddingBottom',
	'paddingLeft',
	'paddingRight',
	'paddingTop',
];

const omitBoxProps = props => omit(props, boxProps);

export default omitBoxProps;
