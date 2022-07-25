export default function Text(props) {
    const { styles, children, _onClick } = props;

    return (
        <p style={{ ...styles, margin: 0, padding: 0 }} onClick={_onClick}>
            {children}
        </p>
    )
}