import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../apis/projects-api';

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  technologies: string[];
  createdAt?: string;
  updatedAt?: string;
}

const PROJECTS_QUERY_KEY = 'projects';

export const useProjects = () => {
  return useQuery({
    queryKey: [PROJECTS_QUERY_KEY],
    queryFn: getProjects,
  });
};

// export const useProject = (id: string) => {
//   return useQuery({
//     queryKey: [PROJECTS_QUERY_KEY, id],
//     queryFn: () => getProjectById(id),
//     enabled: !!id,
//     staleTime: 5 * 60 * 1000,
//     gcTime: 10 * 60 * 1000,
//   });
// };
