export default function Flex(props) {
    const { styles, children, _onClick } = props;

    const defaultStyles = {
        display: 'flex',
        width: '100%',
    }

    return (
        <div style={{ ...defaultStyles, ...styles }} onClick={_onClick}>
            {children}
        </div>
    )
}