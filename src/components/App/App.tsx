import { fetchPhoto } from "../../servises/api"; //запит

import SearchBar from "../SearchBar/SearchBar"; //пошук
import ImageGallery from "../ImageGallery/ImageGallery"; //
import LoadMore from "../LoadMore/LoadMore";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

//type
import { Image } from "./App.types"; // {}

interface FetchPhotoResponse {
  results: Image[];
  total_pages: number;
}

const App = () => {
  const [query, setQuery] = useState<string>(""); //що шукаємо 'photo'
  const [images, setImages] = useState<Image[]>([]); //фото
  const [page, setPage] = useState<number>(1); //current page
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<true | false>(false);
  const [isError, setIsError] = useState<true | false>(false);
  const [modalIsOpen, setModalIsOpen] = useState<true | false>(false);
  const [largeImage, setLargeImage] = useState<Image>(); //для модалки велике зображення, {}

  const openModal = (largeImage: Image) => {
    setModalIsOpen(true);
    setLargeImage(largeImage);
  };
  const closeModal = () => setModalIsOpen(false);

  //Toster при nbPages === page
  useEffect(() => {
    if (totalPages === page) {
      toast.success("You already download all posts!");
    }
  }, [totalPages, page]);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const { results, total_pages } = await fetchPhoto<FetchPhotoResponse>(
          query,
          page
        ); //приходить [{},{},..,{}]

        setImages((prev) => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setIsError(true);
        console.log("❌ Error!:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query, page]);

  //--=====
  const handleSearchValue = (value: string) => {
    setImages([]); //очищаємо галерею при новому запиті
    setPage(1); //сторінку повертаємо на 1

    setQuery(value); // значення value передамо в fetch
  };

  //--LoadMore
  const handleLoadMore = () => {
    setPage((prev: number) => prev + 1);
  };

  return (
    <>
      <SearchBar onSearchValue={handleSearchValue} />
      <ImageGallery images={images} onOpenModal={openModal} />

      {isLoading && <Loader />}

      {/* якщо є що рендерити і не прийшов пустий масив */}
      {totalPages > page && images.length > 0 && (
        <LoadMore onLoadMore={handleLoadMore} />
      )}
      {isError && <h2>❌ Виникла помилка, спробуйте ще раз!</h2>}

      {modalIsOpen && largeImage && (
        <ImageModal
          onClose={closeModal}
          // onOpenModal={openModal}
          image={largeImage}
        ></ImageModal>
      )}
    </>
  );
};

export default App;
