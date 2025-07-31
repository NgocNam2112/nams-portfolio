import { apiClient } from '@/apis/api-client';
import { Project } from '../hooks/useProjectService';

export const getProjects = async (): Promise<Project[]> => {
  const response = (await apiClient.get<Project[]>('/projects')) as unknown as Project[];
  return response;
};
