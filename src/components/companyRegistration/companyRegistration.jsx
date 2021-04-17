import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CompanyRegistrationComponent from "./companyRegistrationComponent";
import { clearRegisterCompanyRedux, registerNewCompany } from '../../redux/actions/companyRegisterActions';
import { LOGO_KEY } from "../../constants/commonConstants";
import Loader from '../loader';
import { displayErrors } from '../../utlis';
import { clearError } from '../../redux/actions/errorActions';
import InfoComponent from '../infoComponent';
import { SUCCESS } from '../../constants/componentVariants';
import { Container } from 'react-bootstrap';


const CompanyRegistration = ({ setLoading }) => {

    const [validated, setValidated] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        about: "",
        address: "",
        city: "",
        state: "",
        phone: "",
        pincode: "",
    })

    const dispatch = useDispatch();

    const { name, about, address, city, state, pincode, phone } = formData;

    const [logo, setLogo] = useState();

    const { isLoading, data } = useSelector(state => state.companyRegister);

    const errorsSelector = useSelector((state) => state.errors);

    const { allErrors } = errorsSelector;

    useEffect(() => {
        setLoading(isLoading)
        return dispatch(clearRegisterCompanyRedux())
    }, [isLoading])

    useEffect(() => {
        displayErrors(allErrors)
        return () => dispatch(clearError())
    }, [allErrors])

    const handleFileChange = ({ target }) => {
        setLogo(target.files[0]);
    }

    const handleChange = ({ target }) => {
        const { id, value } = target;
        setFormData({
            ...formData,
            [id]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
        } else {
            const uploadData = new FormData();
            for (const property in formData) {
                uploadData.append(`${property}`, formData[property])
            }
            if (logo) {
                uploadData.append(LOGO_KEY, logo, logo.name)
            }
            //TODO: token should be fetched from redux
            dispatch(registerNewCompany(uploadData));
        }

        setValidated(true);
    }

    const propsToPass = {
        validated,
        name,
        about,
        address,
        phone,
        city,
        state,
        pincode,
        handleChange,
        handleSubmit,
        handleFileChange,
        isLoading,
    }

    const infoProps = {
        variant: SUCCESS,
        title: "Congrats",
        message: "Your company has been successfully register and will be verifed shortly"
    }

    return <>
        {!data && <CompanyRegistrationComponent {...propsToPass} />}
        {data && <Container className="w-50">
            <InfoComponent {...infoProps} />
        </Container>}
    </>
}

export default Loader(CompanyRegistration);
