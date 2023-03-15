import React, { useState,createContext } from 'react';
import { Input, Alert } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SearchMovie = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [showError, setShowError] = useState(false);

  const handleChange = (value) => {
    setValue(value);
    console.log(value)
  };

  const handleEnterButton = () => {
    if (value.trim() !== '') {
      navigate(`/search/query=${value}`,{state:{query:value}});
      setShowError(false);
    } else {
      setShowError(true);
    }
  };
  //context
//   const MySearchContext = createContext()

  return (
    <>
      <Input
        placeholder="Search movie"
        size="middle"
        prefix={<SearchOutlined />}
        onChange={(e) => handleChange(e.target.value)}
        onPressEnter={() => handleEnterButton()}
      />
      {showError && (
        <Alert message="Please enter a search term" type="error" showIcon closable 
        style={{   position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999, }}/>
      )}
    </>
  );
};

export default SearchMovie;
