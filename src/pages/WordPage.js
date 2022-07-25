import { useEffect, useState } from 'react';
import { Flex, Text } from '../elements';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionCreator as wordActions } from '../redux/modules/word';
import WordCard from '../components/WordCard';

// import icons
import { MdArrowBack } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { TbArrowsUpDown, TbArrowsShuffle } from 'react-icons/tb';

// import modals
import { ConvertModal, SortModal, Modal } from '../modal';

export default function WordPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wordList = useSelector(state => state.word.wordList);
    const wordListLength = wordList.filter(e => e.state === 'complete').length;
    const wordListState = useSelector(state => state.word.wordListState);
    const visible = useSelector(state => state.word.visible);

    const [convertModal, setConvertModal] = useState(false);
    const [sortModal, setSortModal] = useState(false);

    const clickState = (state) => {
        if (wordListState !== state)
            dispatch(wordActions.convertState(state))
    }

    const clickToBack = () => {
        navigate('/back');
    }

    const clickConvert = () => {
        setConvertModal(true);
    }

    const clickSort = () => {
        setSortModal(true);
    }

    const clickSortShuffle = () => {
        dispatch(wordActions.sortWordList(5))
    }

    const clickVisible = () => {
        dispatch(wordActions.convertVisible());
    }

    useEffect(() => {
        if (wordList.length === 0)
            dispatch(wordActions.getWord())
    }, [])

    return (
        <Flex styles={{ width: '100vw', height: '100%', flexDirection: 'column' }}>
            <Flex styles={{
                height: '50px',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                padding: '0 16px',
            }}>
                <MdArrowBack size={24} onClick={clickToBack} />
                <Text styles={{ fontSize: '16px', fontWeight: 'bold' }}>기말고사 총 범위</Text>
                <BsThreeDots size={24} onClick={clickConvert} />
            </Flex>

            <Flex styles={{ padding: '0 16px', gap: '16px' }}>
                <Flex styles={{ ...btnStyle, backgroundColor: '#F5F5F5', justifyContent: 'space-between' }}>
                    <Text styles={{ ...btnTextStyle, color: '#5C5F66' }}>{wordListLength}/{wordList.length}단어</Text>
                    <Text styles={{ ...btnTextStyle, color: '#B5B7BA' }}>{Math.floor(wordListLength / wordList.length * 100)}%</Text>
                </Flex>
                <Flex styles={{ ...btnStyle, backgroundColor: '#F5F7FF' }}>
                    <Text styles={{ ...btnTextStyle, color: '#5471FF' }}>
                        큰 카드로 보기
                    </Text>
                </Flex>
            </Flex>

            <Flex styles={{ justifyContent: 'space-between', padding: '0 16px', marginBottom: '16px' }}>
                <Flex styles={{ gap: '12px' }}>
                    <Text styles={wordListState === 'learning' ? wordStateCheckedStyle : wordStateStyle}
                        _onClick={() => clickState('learning')}>학습중</Text>
                    <Text styles={wordListState === 'complete' ? wordStateCheckedStyle : wordStateStyle}
                        _onClick={() => clickState('complete')}>암기완료</Text>
                </Flex>
                <Flex styles={{ width: 'fit-content', gap: '12px', paddingTop: '4px' }}>
                    <TbArrowsUpDown size={24} color={sortModal ? "#6F87FF" : "#B5B7BA"} onClick={clickSort} />
                    <TbArrowsShuffle size={24} color="#B5B7BA" onClick={clickSortShuffle} />
                </Flex>
            </Flex>

            <Flex styles={{
                flexDirection: 'column',
                overflow: 'scroll',
                flex: 1,
                padding: '8px 16px',
            }}>
                {wordList.length && wordList.map((v, i) =>
                    wordListState === v.state &&
                    <Flex key={`word${i}`}>
                        <WordCard data={v} index={i}></WordCard>
                    </Flex>
                )}
            </Flex>
            <Flex styles={{
                position: 'fixed',
                width: '130px',
                height: '50px',
                backgroundColor: '#6F87FF',
                borderRadius: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                right: '32px',
                bottom: '64px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)'
            }}
                _onClick={clickVisible}>
                <Text styles={{
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                    {visible ? "전체 숨기기" : "전체 보이기"}
                </Text>
            </Flex>
            {convertModal &&
                <Modal close={() => setConvertModal(false)}>
                    <ConvertModal>
                    </ConvertModal>
                </Modal>}
            {sortModal &&
                <Modal close={() => setSortModal(false)}>
                    <SortModal>
                    </SortModal>
                </Modal>}
        </Flex>
    );
}

const btnStyle = {
    height: '32px',
    borderRadius: '6px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '24px 0 16px 0',
    padding: '0 16px'
}

const btnTextStyle = {
    fontSize: '12px',
    fontWeight: 'bold',
}

const wordStateStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '30px',
    color: '#DBDCDC'
}

const wordStateCheckedStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '30px',
    color: '#292C34',
    borderBottom: '2px solid #000'
}