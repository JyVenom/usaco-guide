import { createContext } from 'react';
import * as React from 'react';
import { ModuleInfo, ModuleLinkInfo } from '../models/module';

const ModuleLayoutContext = createContext<{
  module: ModuleInfo;
  moduleLinks: ModuleLinkInfo[];
}>(null);

export default ModuleLayoutContext;
