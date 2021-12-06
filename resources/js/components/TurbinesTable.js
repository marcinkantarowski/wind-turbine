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

import InspectionData from "./InspectionData";

const emptyForm = {
    id: null,
    country: '',
    location: '',
    efficiency: '',
    efficiencyColor: '',
    height: ''
}

const TurbinesTable = () => {

    const [inspectionVisible, setInspectionVisible] = useState(false);
    const [inspectionData, setInspectionData] = useState(false);
    const [visible, setVisible] = useState(false);
    const [item, setItem] = useState(emptyForm);
    const [title, setTitle] = useState(false);
    const [turbines, setTurbines] = useState([]);

    const [id, setId] = useState(false);
    const [country, setCountry] = useState(false);
    const [location, setLocation] = useState(false);
    const [efficiency, setEfficiency] = useState(false);
    const [height, setHeight] = useState(false);

    useEffect(() => {
        axios.get("/api/turbines").then(res => {
            setTurbines(res.data.collection);
        })
            .catch(err => {
            console.log(err);
        });
    }, []);

   return (
        <>
            <CModal visible={inspectionVisible} onClose={() => setInspectionVisible(false)}>
                <CModalHeader>
                    <CModalTitle>Inspection Data</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <InspectionData data={inspectionData}/>
                </CModalBody>
            </CModal>

            <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>
                    <CModalTitle>{title}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm>
                        <div className="mb-3">
                            <CFormLabel>Country</CFormLabel>
                            <CFormInput
                                type="text"
                                id="countryInput"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel>Location</CFormLabel>
                            <CFormInput
                                type="text"
                                id="locationInput"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel>Efficiency %</CFormLabel>
                            <CFormInput
                                type="text"
                                id="efficiencyInput"
                                value={efficiency}
                                onChange={(e) => setEfficiency(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <CFormLabel>Height m</CFormLabel>
                            <CFormInput
                                type="text"
                                id="heightInput"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="secondary"
                        onClick={() => setVisible(false)}
                    >
                        Close
                    </CButton>
                    <CButton
                        color="primary"
                        onClick={
                            () => {
                                const form = {
                                    id: id,
                                    country: country,
                                    location: location,
                                    efficiency : efficiency,
                                    height: height
                                }

                                if(typeof(Number(efficiency)) === 'number' && efficiency >=0 && efficiency <= 100
                                    && typeof(Number(height)) === 'number' && height > 0 && height <= 1000) {
                                    if(id) {
                                        axios.put(`/api/turbines/${id}`, form).then(res => {
                                            axios.get("/api/turbines").then(res => {
                                                setTurbines(res.data.collection);
                                            })
                                        });
                                    } else {
                                        axios.post("/api/turbines", form).then(res => {
                                            axios.get("/api/turbines").then(res => {
                                                setTurbines(res.data.collection);
                                            })
                                        });
                                    }
                                    setVisible(false);
                                } else {
                                    alert("Efficiency must be a number between 0-100, Height must be a number between 1-1000");
                                }
                            }
                        }
                    >
                        Save changes</CButton>
                </CModalFooter>
            </CModal>

            <CRow>
                <CCol xs>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <CContainer>
                                <CRow>
                                    <CCol className="text-start">List of Turbines</CCol>
                                    <CCol className="text-end">
                                        <CButton
                                            onClick={
                                                () => {
                                                    setVisible(!visible);
                                                    setTitle('Add Turbine Details');
                                                    setId(false);
                                                    setCountry('');
                                                    setLocation('');
                                                    setEfficiency('');
                                                    setHeight('');
                                                }
                                            }
                                            color="primary"
                                            size="sm"
                                        >
                                            Add
                                        </CButton>
                                    </CCol>
                                </CRow>
                            </CContainer>
                        </CCardHeader>
                        <CCardBody>

                            <br />

                            <CTable align="middle" className="mb-0 border" hover responsive>
                                <CTableHead color="light">
                                    <CTableRow>
                                        <CTableHeaderCell>ID</CTableHeaderCell>
                                        <CTableHeaderCell>Country</CTableHeaderCell>
                                        <CTableHeaderCell>Location</CTableHeaderCell>
                                        <CTableHeaderCell>Efficiency</CTableHeaderCell>
                                        <CTableHeaderCell>Height</CTableHeaderCell>
                                        <CTableHeaderCell className="text-end">Actions</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {turbines.map((item, index) => (
                                        <CTableRow v-for="item in tableItems" key={index}>
                                            <CTableDataCell>
                                                <div>{item.id}</div>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                {item.country}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                {item.location}
                                            </CTableDataCell>

                                            <CTableDataCell>
                                                <div className="clearfix">
                                                    <div className="float-start">
                                                        <strong>{item.efficiency}%</strong>
                                                    </div>
                                                </div>
                                                <CProgress thin color={item.efficiencyColor} value={item.efficiency} />
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                {item.height}
                                            </CTableDataCell>
                                            <CTableDataCell className="text-end">
                                                <CButton
                                                    onClick={
                                                        () => {
                                                            axios.get("/api/elements", {
                                                                params: {
                                                                    turbine_id: item.id
                                                                }
                                                            }).then(res => {
                                                                setInspectionData(res.data.collection);
                                                                setInspectionVisible(!inspectionVisible);
                                                            }).catch(err => {
                                                                    console.log(err);
                                                            });



                                                        }
                                                    }
                                                    color="primary"
                                                    size="sm"
                                                >
                                                    Inspect
                                                </CButton>
                                                <CButton
                                                    onClick={
                                                        () => {
                                                            setVisible(!visible);
                                                            setItem(item);
                                                            setTitle('Edit Turbine Details');
                                                            setId(item.id);
                                                            setCountry(item.country);
                                                            setLocation(item.location);
                                                            setEfficiency(item.efficiency);
                                                            setHeight(item.height);
                                                        }
                                                    }
                                                    color="success"
                                                    size="sm"
                                                >
                                                    Edit
                                                </CButton>
                                                <CButton
                                                    onClick={
                                                        () => {
                                                            setItem(item);
                                                            axios.delete(`/api/turbines/${item.id}`).then(res => {
                                                                if(res.data.status === "OK") {
                                                                    axios.get("/api/turbines").then(res => {
                                                                        setTurbines(res.data.collection);
                                                                    })
                                                                }
                                                            });
                                                        }
                                                    }
                                                    color="danger"
                                                    size="sm"
                                                >
                                                    Delete
                                                </CButton>
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))}
                                </CTableBody>
                            </CTable>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default TurbinesTable
