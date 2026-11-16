# Rhythm Hive Wiki — Bộ sưu tập thẻ

Ứng dụng web tĩnh chạy trực tiếp trên trình duyệt, không cần cài đặt gói. Mở `index.html` để sử dụng.

## Tính năng

- Tìm kiếm và lọc thẻ theo nhóm nhạc, Level, cấp thẻ và loại thẻ.
- Có roster đủ thành viên của BTS, TXT, ENHYPEN, SEVENTEEN, LE SSERAFIM, NewJeans, BOYNEXTDOOR, ILLIT và TWS.
- Hiển thị logo Rhythm Hive đã lưu trong `assets/brand/` (lấy từ [Rhythm Hive Wiki](https://rhythmhive.fandom.com/wiki/File:Rhythm_Hive_Logo.png)) và tên trang Rhythm Hive Wiki ở góc trên.
- Thẻ được gom thành từng khu vực theo nhóm nhạc; bộ lọc áp dụng trên từng nhóm và ẩn nhóm không có kết quả.
- Có ảnh thẻ FX màu xanh đủ thành viên TWS (6) và TXT (5); BOYNEXTDOOR dùng bộ Candy Serenade FX từ Wiki.
- Cấp thẻ xếp UR > XR > R > S > A > B; loại thẻ Live/Special/FX/Season/Album được đánh dấu màu riêng.
- Mỗi thẻ hiển thị nhãn phân loại rõ ràng theo cấp và loại bên dưới tên nhóm; loại chưa xác định được ghi riêng.
- Có thể đổi cấp chữ UR/XR/R/S/A/B và loại/màu Live/Special/FX/Season/Album riêng cho từng thẻ; lựa chọn được lưu trên thiết bị và áp dụng cho lọc/thứ tự.
- Đổi cấp/loại chỉ tác động đến thẻ đang chọn: ứng dụng ưu tiên ảnh đúng cấp và loại từ Wiki; nếu Wiki chỉ có ảnh đúng chủ đề/loại nhưng không ghi cấp trong tên tệp, dùng ảnh đó không phủ nhãn cấp lớn lên ảnh. Nhãn cấp nhỏ trên card vẫn thể hiện lựa chọn hiện tại; nhãn phủ chỉ dùng khi phải hiển thị ảnh dự phòng không khớp. Nếu không có ảnh phù hợp, giữ ảnh nhân vật và cập nhật nhãn/màu của riêng thẻ đó.
- Tự nhận diện loại FX từ tên ảnh theme Candy Serenade và loại Album từ IF I SAY, I LOVE YOU; các ảnh không khớp theme đã xác minh vẫn để chưa rõ thay vì đoán.
- Chọn Level 1–60 riêng cho từng thẻ hoặc cập nhật hàng loạt để tính lại chỉ số và sức mạnh đội hình.
- Chấm điểm yêu thích từ 1 đến 5 sao.
- Di chuột vào bất kỳ thẻ nào trong bộ sưu tập hoặc danh sách đội hình (hoặc bấm nút "ℹ Hồ sơ") để xem ngay bảng thông tin cơ bản của thành viên đó: Tên thật, Ngày sinh, Cung hoàng đạo, Quốc tịch, Vị trí trong nhóm, Công ty quản lý, Fandom, Tiểu sử tóm tắt và chỉ số sức mạnh của thẻ.
- Tạo đội hình tối đa 5 thẻ cùng một nhóm nhạc; lưu, mở và xóa nhiều đội hình bằng LocalStorage.
- Nhập thêm danh mục thẻ từ tệp JSON. Thẻ có ID trùng sẽ được cập nhật; thẻ khác được giữ nguyên.
- Tự tìm ảnh thẻ theo tên nhân vật trong danh mục nhóm tương ứng trên Rhythm Hive Wiki; ảnh liên kết về trang tệp nguồn.
- Nếu Wiki chưa có ảnh đúng cấp/loại, mở tìm kiếm ảnh theo thẻ trên Google Images, Bing hoặc Pinterest, hoặc tìm video mở thẻ/khoe bộ sưu tập trên YouTube; có thể dán URL ảnh HTTPS đã xác minh để lưu riêng cho thẻ, cấp và loại đó. Thumbnail/video YouTube không tự động được dùng làm ảnh thẻ.
- Xem top bài cùng nhóm theo mốc điểm mục tiêu EX ở Super Hard trên Wiki. Đây là ước tính theo tổng bài, không phải dự đoán điểm riêng cho thành viên.

## Dữ liệu và cách tính

Roster cài sẵn bao gồm đầy đủ thành viên của các nhóm được liệt kê ở trên. Sáu thẻ TWS và năm thẻ TXT FX màu xanh dùng ảnh do người dùng cung cấp và được đánh dấu UR theo ảnh. Sáu thẻ BOYNEXTDOOR dùng bộ Candy Serenade FX từ Wiki và liên kết về trang tệp nguồn. Khi đổi cấp/loại, app tìm ảnh đúng cấp và loại trước; nếu Wiki chỉ có ảnh đúng chủ đề/loại nhưng không ghi cấp trong tên tệp, app dùng ảnh đó không phủ nhãn cấp lớn lên ảnh. Nhãn cấp nhỏ trên card vẫn thể hiện lựa chọn hiện tại; nhãn phủ chỉ dùng khi phải hiển thị ảnh dự phòng không khớp. Không phải thành viên nào cũng có đủ ảnh mọi loại trên Wiki; nếu không có ảnh trong danh mục phù hợp, app không tự gán ảnh của loại khác. Có thể tìm ảnh thiếu trên Google Images, Bing hoặc Pinterest, hoặc tìm video mở thẻ/khoe bộ sưu tập trên YouTube; sau đó dán URL ảnh HTTPS đã xác minh để lưu riêng cho biến thể thẻ đó. Thumbnail/video YouTube không tự động được dùng làm ảnh thẻ. Nhãn phủ này là trình bày trong app, không phải ảnh thẻ game chính thức. Chỉ số của các thẻ mẫu, kể cả TWS, TXT và BOYNEXTDOOR, vẫn là minh họa; thay dữ liệu bằng chỉ số chính xác nếu bạn muốn mô phỏng bộ sưu tập thực. Ảnh cho các nhóm khác được tìm từ [Rhythm Hive Wiki — Card images](https://rhythmhive.fandom.com/wiki/Category:Card_images) và các danh mục ảnh theo nhóm; ứng dụng ưu tiên tệp được tải lên gần đây nhất trong danh mục mỗi nhóm, nên đây có thể là bộ/theme mới nhất hiện có trên Wiki chứ không nhất thiết là card đúng grade của nhân vật. Ảnh hiển thị toàn khung theo tỷ lệ gốc để hạn chế crop và upscale. Chỉ số được nội suy tuyến tính giữa `stats.min` ở Level 1 và `stats.max` ở Level 60; thay dữ liệu bằng chỉ số chính xác để có kết quả phù hợp với nguồn của bạn.

Có thể cung cấp URL ảnh riêng trong trường `image` khi nhập JSON; nếu không có, ứng dụng sẽ thử tìm ảnh theo tên nhân vật trên Wiki.

Tệp JSON cần chứa một mảng thẻ:

```json
[
  {
    "id": "group-member-card",
    "name": "Tên nhân vật",
    "group": "Tên nhóm",
    "grade": "UR",
    "type": "live",
    "image": "https://example.com/card.jpg",
    "stats": {
      "min": { "vocal": 500, "dance": 480, "rap": 450, "charm": 510 },
      "max": { "vocal": 950, "dance": 900, "rap": 850, "charm": 960 }
    }
  }
]
```

`image` và `type` có thể bỏ qua. Ảnh dùng URL HTTP/HTTPS hoặc đường dẫn tương đối trong ứng dụng. `type` có thể là `live`, `special`, `fx`, `season` hoặc `album`; loại không xác định sẽ hiển thị trung tính và có thể gán trực tiếp trên card. `grade` nhận `UR`, `XR`, `R`, `S`, `A` hoặc `B` (có thể dùng `rarity` cho dữ liệu cũ). Chỉ số phải là số; mỗi thẻ cần có ID duy nhất trong tệp. Dữ liệu danh mục, yêu thích, cấp độ và đội hình được lưu cục bộ trên trình duyệt hiện tại.

Gợi ý bài hát chính xác theo thành viên cần dữ liệu phân bổ note/điểm cho từng idol; hiện app xếp hạng gần đúng theo mốc EX Super Hard toàn bài cùng nhóm, dựa trên trang bài hát của Wiki và quy tắc xếp hạng trong [Music Arcade](https://rhythmhive.fandom.com/wiki/Music_Arcade#Estimated_Rank_%26_Score_Buffs).
