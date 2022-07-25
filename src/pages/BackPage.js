import { Flex, Text } from "../elements";
import { useNavigate } from 'react-router-dom';

const BackPage = () => {
    const navigate = useNavigate();

    const clickToWordPage = () => {
        navigate('/')
    }

    return (
        <Flex styles={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            gap: '10px'
        }}>
            <Text styles={{
                fontSize: '24px',
                fontWeight: 'bold'
            }}>
                단어장의 상태 유지 확인을 위한 다른 페이지입니다.
            </Text>
            <Text styles={{
                fontSize: '16px',
                fontWeight: 'bold'
            }}
                _onClick={clickToWordPage}>
                단어장으로 돌아가기
            </Text>
        </Flex>
    )
}

export default BackPage;