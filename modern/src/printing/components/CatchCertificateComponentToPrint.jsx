import { Container } from "@mui/material";
import * as React from "react";
import '../printingStyle.css';

export const CatchCertificateComponentToPrint = React.forwardRef((props, ref) => {

    let cfr = props.data.cfr
    let extMark = props.data.extMark
    let species = props.data.species
    let quantity = props.data.quantity

    return (
        <Container ref={ref}>
          <table>
            <thead>
              <tr>
                <th colSpan="6">GFCM Catch Certificate / Сертификат за улов на ГКРСМ<br/>Turbot GSA 29 / калкан GSA 29</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>Catch document number /</b> № на документа</td>
                <td colSpan="4" className="no_border_bottom"><b>Validating authority /</b> Заверяващ орган</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="4" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>1. Name of the fishing vessel master /</b> Име на собственика на кораба</td>
                <td colSpan="4" className="no_border_bottom"><b>Address - Tel/fax/email /</b> Адрес – телефон, факс, ел.поща<br/></td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="4" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="6" className="no_border_bottom"><b>Signature and stamp of the fishing vessel master /</b> Подпис и печат на собственика на кораба</td>
              </tr>
              <tr>
                <td colSpan="6" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" rowSpan="2" className="no_border_bottom"><b>2. Vessel name and registration No /</b> Име и външна маркировка на кораба</td>
                <td colSpan="2" className="no_border_bottom"><b>Flag and home port /</b> Флаг и пристанище на домуване</td>
                <td colSpan="2" className="no_border_bottom"><b>Call sign/IMO (where applicable) /</b> Позивна/ММО</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="2" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" rowSpan="2" className="no_border_top">x</td>
                <td colSpan="4" className="no_border_bottom"><b>Inmarsat/fax/telephone number/email</b></td>
              </tr>
              <tr>
                <td colSpan="4" className="no_border_top">x</td>
              </tr>
              <tr>
              </tr>
              <tr>
                <td colSpan="6" className="no_border_bottom"><b>3. Port /</b> Пристанище</td>
              </tr>
              <tr>
                <td colSpan="6" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" rowSpan="2"></td>
                <td colSpan="2" className="no_border_bottom"><b>Port of departure and country /</b> Пристанище и държава на тръгване</td>
                <td colSpan="2" className="no_border_bottom"><b>Port of landing and country /</b> Пристанище и държава на разтоварване</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="4" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>4. Master of fishing vessel /</b> Капитан на риболовния кораб</td>
                <td colSpan="4" className="no_border_bottom"><b>Name - Address - Tel/fax/email /</b> Име, адрес, тел./факс/ел.поща<br/></td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="4" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>Fishing licence number - valid to (date) /</b> № и дата на валидност на разрешителното</td>
                <td colSpan="2" className="no_border_bottom"><b>Turbot fishing authorization number - valid to (date) /</b> номер и валидност на специалното разрешително за улов на калкан<br/><br/></td>
                <td colSpan="2" className="no_border_bottom"><b>Signature of the holder /</b> Подпис на титуляря</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="2" className="no_border_top">x</td>
              </tr>
              <tr>
                <td><b>5. Catch area /</b> Зона на улов (coordinates Long., Lat.) </td>
                <td><b>Catch date /</b> дата на улов</td>
                <td colSpan="2"><b>Estimated live weight (kg) /</b> оценка на живото тегло (кг)</td>
                <td colSpan="2"><b>Verified weight landed (kg) /</b> проверено разтоварено количество </td>
              </tr>
              <tr>
                <td><b>a.</b></td>
                <td></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td><b>b.</b></td>
                <td></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td><b>c.</b></td>
                <td></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td><b>d.</b></td>
                <td></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td><b>e.</b></td>
                <td></td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td colSpan="2"><b>6. Flag state authority validation /</b> Заверка на държавата на знамето</td>
                <td colSpan="2"></td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>Name and title /</b> име и длъжност</td>
                <td colSpan="2" className="no_border_bottom"><b>Signature /</b> подпис</td>
                <td colSpan="2" className="no_border_bottom"><b>Date and stamp /</b> дата и печат</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="2" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>7. Name of the exporter, if applicable /</b> Име на износителя, ако е приложимо<br/></td>
                <td colSpan="4" className="no_border_bottom"><b>Address - Tel/fax/email /</b> Адрес, телефон, факс, ел.поща<br/></td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="4" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>Weight exported (Kg) /</b> Количество за износ (кг) </td>
                <td colSpan="4" className="no_border_bottom"><b>Product Type /</b> Описание на продукта</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="4" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="6" className="no_border_bottom"><b>Signature and stamp of the exporter – Date /</b> Подпис и печат на износителя - дата</td>
              </tr>
              <tr>
                <td colSpan="6" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>8. Export authority validation -<br/>Name and title /</b> заверка на компетентния орган при износ – име и длъжност</td>
                <td colSpan="2" className="no_border_bottom"><b>Signature /</b> Подпис</td>
                <td colSpan="2" className="no_border_bottom"><b>Date and stamp /</b> Дата и печат</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="2" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>9. Name of the importer /</b> Име на вносителя</td>
                <td colSpan="4" className="no_border_bottom"><b>Address - Tel/fax/email /</b> Адрес – телефон, факс, ел.поща<br/></td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="4" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>Weight imported (Kg) /</b> количество на внос (кг)</td>
                <td colSpan="4" className="no_border_bottom"><b>Product Type /</b> Тип на продукта</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="4" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="6" className="no_border_bottom"><b>Signature and stamp of the importer – Date /</b> Подпис и печат на вносителя - дата</td>
              </tr>
              <tr>
                <td colSpan="6" className="no_border_top">x</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_bottom"><b>10. Import authority validation<br/>Name and title /</b> Заверка на компетентния орган при внос – име и длъжност</td>
                <td colSpan="2" className="no_border_bottom"><b>Signature /</b> Подпис</td>
                <td colSpan="2" className="no_border_bottom"><b>Date and stamp /</b> Дата и печат</td>
              </tr>
              <tr>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="2" className="no_border_top">x</td>
                <td colSpan="2" className="no_border_top">x</td>
              </tr>
            </tbody>
          </table>
        </Container>
    );
  });
  