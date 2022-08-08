import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";
import { getHistoricoHabitos } from "../../services/trackit";


export default function TelaHistorico() {
    const [value, setValue] = useState(new Date());
    const [dados, setDados] = useState([]);

    useEffect(() => {
        getHistoricoHabitos()
            .then(resposta => setDados(resposta.data))
            .catch(erro => console.log(erro));
    }, []);

    console.log(dados)

    function onChange(nextValue) {
        setValue(nextValue);
    };

    // function tileClassName({ date, view }) {
    //     if (view === 'month') {
    //         if (true) {
    //         return 'myClassName';
    //         }
    //     } else {
    //         return 'otherClassName';
    //     };
    // };

    return (
        <Container>
            <h2>Histórico</h2>
            <Calendar
                locale='pt-br'
                onChange={onChange}
                value={value}
                // tileClassName={tileClassName}
                // (locale, date) => formatDate(date, 'MMM')
                // (locale, date) => formatDate(date, 'd')
                // (value, event) => alert('New date is: ', value)
            />
        </Container>
    );
}

const Container = styled.div`
    padding: 18px;

    h2 {
        margin-bottom: 17px;
        font-size: 23px;
        color: #126BA5;
    }
`;