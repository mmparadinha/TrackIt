import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";
import { getHistoricoHabitos } from "../../services/trackit";


export default function TelaHistorico() {
    const [value, setValue] = useState(new Date());
    const [dados1, setDados1] = useState([]);

    useEffect(() => {
        getHistoricoHabitos()
            .then(resposta => setDados1(resposta.data))
            .catch(erro => console.log(erro));
    }, []);

    console.log(dados1)

    function onChange(nextValue) {
        setValue(nextValue);
    };

    function tileClassName({ date, view }) {
        const feitos = [];
        if (view === 'month') {
            dados1.map((dados2) => {
                if (date === dados2.day) {
                    console.log('4')

                    feitos = dados2.habits.filter((habit) => {
                        if (habit.done) {
                            return true;
                        };
                    });
                };
                if (feitos.length === dados2.habits.length) {
                    return 'sucesso';
                } else {
                    return 'falha';
                };
            });
        };
    };

    return (
        <Container>
            <h2>Histórico</h2>
            <Calendar
                locale='pt-br'
                onChange={onChange}
                value={value}
                tileClassName={tileClassName}
            // (locale, date) => formatDate(date, 'd')
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

    .react-calendar {
        border-radius: 10px;
    }

    .react-calendar.sucesso {
        background-color: green;
    }

    .react-calendar.falha {
        background-color: crimson;
    }
`;