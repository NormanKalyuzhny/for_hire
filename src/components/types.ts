export interface ContentVisibilityValues{
  setIsAppContentVisible:(value:string)=>string;
  setIsSidebarVisible:(value:boolean)=>void;
}

export interface AboutVisibility{
  isAboutVisible: boolean;
  setIsAboutVisible:(value:boolean)=>void;
}

export interface NotesValues{
  title:string;
  p:string;
}

export interface onLanguageChangeProp{
  onLanguageChange:(value:string)=>void;
}