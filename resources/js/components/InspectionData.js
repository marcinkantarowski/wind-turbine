import React, {useState, useEffect} from "react";
import axios from "axios";
import {
    CButton,
    CCard, CCardBody,
    CCardHeader,
    CCol, CContainer, CForm, CFormInput, CFormLabel,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle, CProgress,
    CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from "@coreui/react";

const InspectionData = ({data}) => {

    data.forEach(item => {

        switch(true) {
            case (Number(item.element_number) % 3 === 0 && Number(item.element_number) % 5 === 0):
                item.output = "Coating Damage and Lightning Strike";
                item.color = 'danger';
                break;
            case (Number(item.element_number) % 3 === 0):
                item.output = "Coating Damage";
                item.color = 'warning';
                break;
            case (Number(item.element_number) % 5 === 0):
                item.output = "Lightning Strike";
                item.color = 'info';
                break;
            default:
                item.output = item.element_number;
                item.color = 'success';
        }
    });

    return (
        <>
            <CTable bordered>
                <CTableBody>
                    {data.map((item, index) => (
                        <CTableRow color={item.color} v-for="item in data" key={index}>
                            <CTableDataCell>
                                <div>{item.output}</div>
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </>
    )
}

export default InspectionData
