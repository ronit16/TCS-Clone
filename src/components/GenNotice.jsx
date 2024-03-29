import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const formatDate = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${day}-${month}-${year}`
}

// Styled components
const NoticeCont = styled.div`
    margin: 0 auto;
    padding: 20px;
`;

const NoticeTitle = styled.h1`
    text-align: center;
    font-size: 50px;
    font-weight: 1000;
    color: #058c42;
    margin: 0px;
`;

const NoticeHeading = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
`;

const NoticeList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0;
`;

const NoticeItem = styled.li`
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`;

const NoticeName = styled.h3`
  font-family: "Rakkas", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 30px;
  color: #555;
  margin: 0;
`;

const NoticeDate = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
`;

const NoticeDesc = styled.p`
  font-size: 16px;
  color: #444;
  margin-bottom: 10px;
`;

const GenNotice = () => {
    const [notice, setNotice] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/notice') // link to database
            .then(response => {
                setNotice(response.data);
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <NoticeCont>
            <NoticeTitle>Notice</NoticeTitle>
            <NoticeHeading>Checkout this page regularly and don't miss any general updates from the Department</NoticeHeading>
            {notice.length > 0 ? (
                <NoticeList>
                    {notice.map((notice) => (
                        <NoticeItem key={notice.id}>
                            <NoticeName>{notice.name}</NoticeName>
                            <NoticeDate>Date: {formatDate (notice.publishdt)}</NoticeDate>
                            <NoticeDesc>{notice.message}</NoticeDesc>
                        </NoticeItem>
                    ))}
                </NoticeList>
            ) : (
                <p>No notices available</p>
            )}
        </NoticeCont>
    );

};

export default GenNotice