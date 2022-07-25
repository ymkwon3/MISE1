import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, ToggleButton } from "../elements";
import { actionCreator as wordActions } from '../redux/modules/word';

const ConvertModal = () => {
    const dispatch = useDispatch();
    const wordConvert = useSelector(state => state.word.wordConvert);

    const clickToggle = () => {
        dispatch(wordActions.convertWord())
    }

    return (
        <Flex styles={{
            position: 'fixed',
            bottom: '0',
            height: '144px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 -3px 10px rgba(0,0,0,0.1)',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '24px'
        }}
            _onClick={(e) => e.stopPropagation()}>
            <Text styles={{
                fonstSize: '16px',
                fontWeight: 'bold'
            }}>더보기</Text>
            <Flex styles={{ marginTop: '24px', justifyContent: 'space-between' }}>
                <Text styles={{
                    fontSize: '16px'
                }}>표기 전환</Text>
                <ToggleButton state={wordConvert} setState={clickToggle} left="영단어" right="뜻" />
            </Flex>
        </Flex>
    )
}

export default ConvertModal;