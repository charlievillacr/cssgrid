import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ClassName = styled.div`
    background: black;
    border: none;
    border-radius: 3px;
    color: white;
    display: inline-block;
    font-size: 0.4em;
    margin-left: 14px !important;
    margin-top: 14px !important;
    padding: 6px 12px;
    text-align: center;
    text-decoration: none;
`

const MainDiv = styled.div`
    background-color: #33ACED;
    grid-area: PageTitle;
`

const Titulo = styled.h2`
    color: white;
    font-family: 'Source Sans Pro', serif;
    font-weight: Bold;
    font-size: 140%;
    margin-top: 14px !important;
    padding-left: 20px;
    padding-right: 20px;
`
const Description = styled.p`
    color: white;
    font-family: 'Source Sans Pro', serif;
    font-size: 18px;
    padding-left: 20px;
    padding-bottom: 160px;
    padding-right: 20px;
`


const PageTitle = () => (

    <MainDiv>
        <ClassName>.page-title</ClassName>
        <Titulo>CSS Grid</Titulo>
        <Description>Demo sandbox for Advanced Layout with CSS Grid.</Description>
    </MainDiv>
)



export default PageTitle