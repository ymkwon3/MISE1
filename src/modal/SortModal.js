import { useDispatch, useSelector } from "react-redux";
import { Flex } from "../elements";
import { actionCreator as wordActions } from '../redux/modules/word';

const SortModal = () => {
    const dispatch = useDispatch();
    const sortType = useSelector(state => state.word.sortType);

    const sortToABC = () => {
        dispatch(wordActions.sortWordList(1));
    }

    const sortToXCount = () => {
        dispatch(wordActions.sortWordList(2));
    }

    const sortToOCount = () => {
        dispatch(wordActions.sortWordList(3));
    }

    const sortLessCount = () => {
        dispatch(wordActions.sortWordList(4));
    }

    return (
        <Flex styles={{
            position: 'fixed',
            bottom: '0',
            height: '288px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 -3px 10px rgba(0,0,0,0.1)',
            flexDirection: 'column',
            alignItems: 'center',
        }}
            _onClick={(e) => e.stopPropagation()}>
            <Flex styles={{ ...boxStyle, fontWeight: 'bold' }}>
                정렬
            </Flex>
            <Flex styles={{ ...boxStyle, backgroundColor: sortType === 1 ? '#F5F7FF' : '#fff' }} _onClick={sortToABC}>
                ABC순
            </Flex>
            <Flex styles={{ ...boxStyle, backgroundColor: sortType === 2 ? '#F5F7FF' : '#fff' }} _onClick={sortToXCount}>
                X 많은 순
            </Flex>
            <Flex styles={{ ...boxStyle, backgroundColor: sortType === 3 ? '#F5F7FF' : '#fff' }} _onClick={sortToOCount}>
                O 많은 순
            </Flex>
            <Flex styles={{ ...boxStyle, backgroundColor: sortType === 4 ? '#F5F7FF' : '#fff' }} _onClick={sortLessCount}>
                학습 횟수 적은 순
            </Flex>
        </Flex>
    )
}

const boxStyle = {
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    fonstSize: '16px',
    borderBottom: '1px solid #eee'
}

export default SortModal;