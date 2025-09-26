import { ImagePlus, Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { axiosInstance } from "../../../api/axios";

const categories = [
  "",
  "Technology",
  "Lifestyle",
  "Travel",
  "Business",
  "Economy",
  "Sports",
];

type FormStateType = {
  title: string;
  category: string;
  thumbnail: string;
  content: string;
};

// 파일 최대 크기 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024;

export default function PostCreate() {
  const navigate = useNavigate();

  // 폼 데이터 상태
  const [formState, setFormState] = useState<FormStateType>({
    title: "",
    category: "",
    thumbnail: "",
    content: "",
  });

  // 에러 상태
  const [errorState, setErrorState] = useState<FormStateType>({
    title: "",
    category: "",
    thumbnail: "",
    content: "",
  });

  // 이미지 미리보기
  const [previewImage, setPreviewImage] = useState("");
  const [isPending, startTransition] = useTransition();

  // 상태 변경
  const handleFormStateChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
    setErrorState((errorState) => ({
      ...errorState,
      [e.target.name]: "",
    }));
  };

  // 이미지 업로드
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // 파일 확장자 유효성 검사
    const allowedExtensions = ["png", "webp", "jpeg", "jpg"];
    const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase(); // 확장자 가져오기
    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      alert(`허용된 이미지 확장자는 ${allowedExtensions.join(", ")} 입니다.`);
      e.target.value = "";
      return;
    }

    // 파일 용량 유효성 검사
    if (selectedFile.size > MAX_FILE_SIZE) {
      alert("이미지 용량은 10MB 이하로 해주세요.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    // readeAsDataURL이 종료되고 onloadend 호출
    reader.onloadend = () => {
      setErrorState((errorState) => ({ ...errorState, ["thumbnail"]: "" }));
      // 이미지 미리보기 설정
      setPreviewImage(reader.result as string);
    };
    // 해당 파일 객체를 이해 가능한 문자열로 변경
    reader.readAsDataURL(selectedFile);
  };

  // 폼 제출
  const handleFormSubmit = () => {
    console.log(formState);
    startTransition(async () => {
      try {
        // 폼 유효성 검사
        const newErrors: FormStateType = {} as FormStateType;
        if (!formState.title.trim()) newErrors.title = "Please enter a title";
        if (!formState.category.trim())
          newErrors.category = "Please select a category";
        if (!previewImage) newErrors.thumbnail = "Please upload a thumbnail";
        if (!formState.content.trim())
          newErrors.content = "Please enter the content";

        if (Object.keys(newErrors).length > 0) {
          setErrorState(newErrors);
          return;
        }

        let thumbnail = "";

        if (previewImage) {
          const formData = new FormData();
          formData.append("file", previewImage);
          formData.append("upload_preset", "react_blog");

          const {
            data: { url },
          } = await axios.post(
            "https://api.cloudinary.com/v1_1/dujhgftfp/image/upload",
            formData
          );
          thumbnail = url;
        }

        const { status } = await axiosInstance.post("/posts", {
          title: formState.title,
          category: formState.category,
          thumbnail: thumbnail,
          content: formState.content,
        });

        if (status === 201) {
          alert("post added!");
          navigate("/");
        }
      } catch (e) {
        console.error(e instanceof Error ? e.message : "unknown error");
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Write New Post</h1>

      <form className="space-y-6" action={handleFormSubmit}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter post title"
            required
            onChange={(e) => handleFormStateChange(e)}
            name="title"
          />
          {errorState?.title && (
            <p className="text-rose-500">{errorState.title}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
            onChange={(e) => handleFormStateChange(e)}
            name="category"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "" ? "Select a Category" : category}
              </option>
            ))}
          </select>
          {errorState?.title && (
            <p className="text-rose-500">{errorState.category}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Featured Image
          </label>
          <div className="relative">
            {/* 이미지 미리보기가 설정되어 있다면 ? 미리보기 이미지 : 이미지 input */}
            {previewImage ? (
              <div className="relative w-full aspect-video mb-4">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  onClick={() => {
                    setPreviewImage("");
                  }}
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleChangeImage(e)}
                  name="thumbnail"
                />
                <label
                  htmlFor="image"
                  className="flex flex-col items-center cursor-pointer"
                >
                  <ImagePlus className="h-12 w-12 text-gray-400 mb-3" />
                  <span className="text-gray-300">Click to upload image</span>
                  <span className="text-gray-500 text-sm mt-1">
                    PNG, JPG up to 10MB
                  </span>
                </label>
              </div>
            )}
            {errorState?.thumbnail && (
              <p className="text-rose-500">{errorState.thumbnail}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            className="w-full h-96 bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your post content here..."
            required
            onChange={(e) => handleFormStateChange(e)}
            name="content"
          />
          {errorState?.content && (
            <p className="text-rose-500">{errorState.content}</p>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400"
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Publish Post"
            )}
          </button>
          <button
            type="button"
            className="px-6 py-2.5 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-colors"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
