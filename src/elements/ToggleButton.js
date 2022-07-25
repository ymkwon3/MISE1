import Flex from "./Flex";
import Text from "./Text";

const ToggleButton = (props) => {
    const { left, right, state, setState } = props;

    const clickButton = () => {
        setState();
    }

    return (
        <Flex styles={{ width: 'fit-content' }}>
            <Text styles={{ ...fontStyle, color: state ? '#6F87FF' : '#B5B7BA' }}>
                {left}
            </Text>
            <Flex styles={{
                width: '40px',
                height: '20px',
                borderRadius: '14px',
                backgroundColor: '#6F87FF',
                padding: '2px',
                margin: '0 6px',
                position: 'relative',
            }}
                _onClick={clickButton}>
                <Flex styles={{
                    backgroundColor: '#fff',
                    borderRadius: '50px',
                    height: '16px',
                    width: '16px',
                    position: 'absolute',
                    left: state ? '2px' : null,
                    right: state ? null : '2px',
                }}>

                </Flex>
            </Flex>
            <Text styles={{ ...fontStyle, color: !state ? '#6F87FF' : '#B5B7BA' }}>
                {right}
            </Text>
        </Flex>

    )
}

const fontStyle = {
    fontSize: '12px',
    fontWeight: 'bold'
}

export default ToggleButton;