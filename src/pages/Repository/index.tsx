/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import Logo from '../../assets/Logo.svg';
import API from '../../services/api';
import Loading from '../../components/Loading';

interface RepositoryParams {
  repository: string;
}
interface Repository {
  id: string;
  name: string;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

interface Issue {
  title: string;
  html_url: string;
  id: number;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData(): Promise<void> {
      setLoading(true);
      const [
        { data: listOfIssues },
        { data: repositoryInfo },
      ] = await Promise.all([
        API.get<Issue[]>(`repos/${params.repository}/issues`),
        API.get<Repository>(`repos/${params.repository}`),
      ]);
      setIssues(listOfIssues);
      setRepository(repositoryInfo);
      setLoading(false);
    }
    loadData();
  }, [params.repository]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>
            <img src={Logo} alt="" />
            <Link to="/">
              <FiChevronLeft size={16} />
              Voltar
            </Link>
          </Header>
          <RepositoryInfo>
            <header>
              <img src={repository?.owner.avatar_url} alt="User" />
              <div>
                <strong>{repository?.full_name}</strong>
                <p>{repository?.description}</p>
              </div>
            </header>
            <ul>
              <li>
                <strong>{repository?.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>{repository?.forks_count}</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>{repository?.open_issues_count}</strong>
                <span>Issues abertas</span>
              </li>
            </ul>
          </RepositoryInfo>
          <Issues>
            {issues.map((issue: Issue) => (
              <a href={issue.html_url} key={issue.id} target="_blank">
                <div>
                  <strong>{issue.title}</strong>
                  <span>{issue.user.login}</span>
                </div>
                <FiChevronRight size={20} />
              </a>
            ))}
          </Issues>
        </>
      )}
    </>
  );
};

export default Repository;
