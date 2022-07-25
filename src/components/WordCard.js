import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text } from "../elements";
import { actionCreator as wordAction } from '../redux/modules/word'

const WordCard = ({ data, index }) => {
    // data : o_count, x_count, trans, word, state, visible, pos
    const { o_count, x_count, trans, word, state, visible } = data;
    const dispatch = useDispatch();

    const wordConvert = useSelector(state => state.word.wordConvert);
    const wordClick = () => {
        dispatch(wordAction.convertWordVisible(index));
    }

    const oCountClick = () => {
        dispatch(wordAction.countIncrease({ index, type: 'o_count' }))
    }

    const xCountClick = () => {
        dispatch(wordAction.countIncrease({ index, type: 'x_count' }))
    }

    const completeClick = () => {
        dispatch(wordAction.convertWordState({ index, value: 'complete' }))
    }

    const learningClick = () => {
        dispatch(wordAction.convertWordState({ index, value: 'learning' }))
    }

    return (
        <Flex
            styles={{
                width: '100%',
                position: 'relative',
                border: '1px solid #eee',
                borderRadius: '6px',
                margin: '6px 0',
                height: '80px',
                overflowY: 'hidden',
                overflowX: 'scroll',
            }}
            _onClick={wordClick}
        >
            <Flex styles={{ position: 'absolute', top: '8px', left: '12px', gap: '8px', width: 'fit-content' }}>
                <Text styles={{ ...countStyle, color: '#F25555' }}>{'X'} {x_count}</Text>
                <Text styles={{ ...countStyle, color: '#177AFF' }}>{'O'} {o_count}</Text>
            </Flex>

            <Flex styles={{ ...containerStyle }}>
                <Text styles={{ ...wordStyle }}>{wordConvert ? word : trans}</Text>
            </Flex>

            <Flex styles={{ ...containerStyle, borderLeft: '1px solid #eee', visibility: visible ? 'visible' : 'hidden' }}>
                <Text styles={{ ...wordStyle }}>{wordConvert ? trans : word}</Text>
            </Flex>

            <Flex styles={{ minWidth: '6px', height: '80px', backgroundColor: visible ? '#E6EBFF' : '#fff' }} />
            {visible && state === "learning" &&
                <Flex>
                    <Flex styles={{ ...boxStyle, backgroundColor: '#F47777' }} _onClick={xCountClick}>
                        X
                    </Flex>
                    <Flex styles={{ ...boxStyle, backgroundColor: '#4694FF' }} _onClick={oCountClick}>
                        O
                    </Flex>
                    <Flex styles={{ ...boxStyle, backgroundColor: '#22E073' }} _onClick={completeClick}>
                        암기완료
                    </Flex>
                </Flex>
            }
            {visible && state === "complete" &&
                <Flex>
                    <Flex styles={{ ...boxStyle, backgroundColor: '#E6EBFF', color: '#5471FF' }} _onClick={learningClick}>
                        재학습
                    </Flex>
                </Flex>
            }
        </Flex>
    )
}

const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '8px 0',
    padding: '0 12px',
    minWidth: 'calc(50% - 3px)',
}

const wordStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
}

const countStyle = {
    fontSize: '10px',
    fontWeight: 'bold'
}

const boxStyle = {
    width: '80px',
    height: '80px',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px', fontWeight: 'bold'
}

export default memo(WordCard);