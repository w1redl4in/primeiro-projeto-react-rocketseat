/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Logo from '../../assets/Logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="Logo Github" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43390533?s=460&u=e5b0f692769b4e1145689b4968223aa0cd331ed4&v=4"
            alt="Felipe Austríaco"
            srcSet=""
          />
          <div>
            <strong>Felipe Austríaco/weed-app</strong>
            <p>
              A fun app with intention of learning and teaching JS's ecosystem
              to friends. We are currently deciding its purpose. Stack is:
              NodeJS - Express - MongoDB - React
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43390533?s=460&u=e5b0f692769b4e1145689b4968223aa0cd331ed4&v=4"
            alt="Felipe Austríaco"
          />
          <div>
            <strong>Felipe Austríaco/weed-app</strong>
            <p>
              A fun app with intention of learning and teaching JS's ecosystem
              to friends. We are currently deciding its purpose. Stack is:
              NodeJS - Express - MongoDB - React
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43390533?s=460&u=e5b0f692769b4e1145689b4968223aa0cd331ed4&v=4"
            alt="Felipe Austríaco"
          />
          <div>
            <strong>Felipe Austríaco/weed-app</strong>
            <p>
              A fun app with intention of learning and teaching JS's ecosystem
              to friends. We are currently deciding its purpose. Stack is:
              NodeJS - Express - MongoDB - React
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
