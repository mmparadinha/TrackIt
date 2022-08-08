import { useContext } from 'react';
import ProgressContext from '../context/ProgressContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Progresso() {
    const { progresso } = useContext(ProgressContext);
    return (
        <CircularProgressbar 
            value={progresso}
            text={'Hoje'}
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#ffffff",
                pathColor: "#ffffff",
                trailColor: "transparent",
                textSize: "18px"
            })}
        />
    );
};