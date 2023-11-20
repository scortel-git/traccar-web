import { Container } from "@mui/material";
import * as React from "react";
import '../printingStyle.css';
import dayjs from 'dayjs';

export const PriorNotificationComponentToPrint = React.forwardRef((props, ref) => {

    let cfr = props.device.cfr
    let extMark = props.device.extMark
    let species = props.data.species
    let quantity = props.data.quantity

    return (
        <Container ref={ref}>
            <table>
                <thead>
                <tr>
                    <th colSpan="12" className="no_border"><b>ПРЕДВАРИТЕЛНО УВЕДОМЛЕНИЕ<br/>За разтоварване на калкан</b></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colSpan="6" className="no_border"><b>1. Информация за риболовния кораб:</b></td>
                    <td colSpan="6" className="no_border"><b>2. Данни за връзка с риболовния кораб:</b></td>
                </tr>
                <tr>
                    <td colSpan="3">Име на кораба:</td>
                    <td colSpan="3">{props.device.name}</td>
                    <td colSpan="3">Име на капитана или упълномощеното лице:</td>
                    <td colSpan="3">{props.driver.name}</td>
                </tr>
                <tr>
                    <td colSpan="3">Външна маркировка:</td>
                    <td colSpan="3">{props.device.attributes.ext}</td>
                    <td colSpan="3">Телефон:</td>
                    <td colSpan="3">{props.driver.attributes.captainPhone}</td>
                </tr>
                <tr>
                    <td colSpan="3">CFR код:</td>
                    <td colSpan="3">{props.device.attributes.cfr}</td>
                    <td colSpan="3">Електронна поща:</td>
                    <td colSpan="3">{props.driver.attributes.captainEmail}</td>
                </tr>
                <tr>
                    <td colSpan="12" className="no_border"></td>
                </tr>
                <tr>
                    <td colSpan="6" className="no_border"><b>3. Информация за отпътуване (залагане на мрежите):</b></td>
                    <td colSpan="6" className="no_border"><b>4. Информация за разтоварването:</b></td>
                </tr>
                <tr>
                    <td colSpan="3">Дата:</td>
                    <td colSpan="3">x</td>
                    <td colSpan="3">Дата:</td>
                    <td colSpan="3">{dayjs(props.data.estimatedArriveTime).format('YYYY-MM-DD')}</td>
                </tr>
                <tr>
                    <td colSpan="3">Пристанище на отпътуването:</td>
                    <td colSpan="3">x</td>
                    <td colSpan="3">Пристанище на разтоварване:</td>
                    <td colSpan="3">{props.data.landingPortId}</td>
                </tr>
                <tr>
                    <td colSpan="3">Координати на залагане на мрежите:</td>
                    <td colSpan="3">x</td>
                    <td colSpan="3">Очакван час на пристигане:</td>
                    <td colSpan="3">{dayjs(props.data.estimatedArriveTime).format('HH:mm:ss')}</td>
                </tr>
                <tr>
                    <td colSpan="12" className="no_border"></td>
                </tr>
                <tr>
                    <td colSpan="12" className="no_border"><b>5. Информация за улова:</b></td>
                </tr>
                <tr>
                    <td colSpan="12" className="no_border"><b>5.1. Над минимално допустимия размер*:</b></td>
                </tr>
                <tr>
                    <td colSpan="2">Вид</td>
                    <td colSpan="2">Код</td>
                    <td colSpan="2">Начин на представяне</td>
                    <td colSpan="2">Брой риби</td>
                    <td colSpan="2">Приблизително оценено тегло</td>
                    <td colSpan="2">Предназначение</td>
                </tr>
                <tr>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                </tr>
                <tr>
                    <td colSpan="12" className="no_border"></td>
                </tr>
                <tr>
                    <td colSpan="12" className="no_border"><b>5.2. Под минимално допустимия размер*:</b></td>
                </tr>
                <tr>
                    <td colSpan="2">Вид</td>
                    <td colSpan="2">Код</td>
                    <td colSpan="2">Начин на представяне</td>
                    <td colSpan="2">Брой риби</td>
                    <td colSpan="2">Приблизително оценено тегло</td>
                    <td colSpan="2">Предназначение</td>
                </tr>
                <tr>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                    <td colSpan="2">x</td>
                </tr>
                <tr>
                    <td colSpan="12" className="no_border">*минимално допустимите размери за улов на калкан – 45 см</td>
                </tr>
                <tr>
                    <td className="no_border">Дата:</td>
                    <td colSpan="11" className="no_border">x</td>
                </tr>
                <tr>
                    <td colSpan="12" className="no_border">Име на капитана / упълномощеното лице:</td>
                </tr>
                <tr>
                    <td colSpan="12" className="no_border">{props.driver.name}</td>
                </tr>
                <tr>
                    <td className="no_border">Подпис:</td>
                    <td colSpan="11" className="no_border">x</td>
                </tr>
                </tbody>
            </table>
        </Container>
    );
  });
  