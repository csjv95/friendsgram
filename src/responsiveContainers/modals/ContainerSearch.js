import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ResponsiveSearch from "../../responsiveComponents/Search/ResponsiveSearch";
import { getSearch } from "../../service/search/getSearch";
import { changeSearchModalState } from "../../redux/modules/modals/modalState";

const ContainerSearch = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [recomendUser, setRecomendUser] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getSearch(searchText, setRecomendUser);
  }, [searchText]);

  const changeSearchModal = () => dispatch(changeSearchModalState());

  return (
    <ResponsiveSearch
      recomendUser={recomendUser}
      searchText={searchText}
      setSearchText={setSearchText}
      search={search}
      setSearch={setSearch}
      handleSearch={changeSearchModal}
    />
  );
};

export default ContainerSearch;
