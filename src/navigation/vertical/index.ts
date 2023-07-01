// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import TagOutline from 'mdi-material-ui/TagOutline';
import CircleOutline from 'mdi-material-ui/CircleOutline';
import ConstructionIcon from '@mui/icons-material/Construction';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'TRANG CHỦ',
      path: '/'
    },
    {
      title: 'CƠ QUAN QUẢN LÝ',
      children: [
        {
          title: 'Ban chỉ huy PCTT & TKCN tỉnh',
          path: '/cong-trinh/de-song',
        },{
          title: 'Ban chỉ huy PCTT & TKCN huyện',
          path: '/cong-trinh/de-bien',
        },{
          title: 'Chi cục thủy lợi',
          path: '/cong-trinh/de-boi',
        },{
          title: 'Hạt quản lý đê',
          path: '/cong-trinh/de-chua-phan-cap',
        }
      ]
    },
    {
      title: 'CÔNG TRÌNH CHỐNG LŨ',
      children: [
        {
          title: 'Tiêu chuẩn chống lũ',
          path: '/cong-trinh/de-song',
        },{
          title: 'Công trình chống lũ',
          children: [
            {
              title: 'Đê, kè cống',
              children: [
                {
                  title: 'Đê sông',
                  path: '/cong-trinh/de-song',
                },{
                  title: 'Đê biển',
                  path: '/cong-trinh/de-bien',
                },{
                  title: 'Đê bối',
                  path: '/cong-trinh/de-boi',
                },{
                  title: 'Đê chưa được phân cấp',
                  path: '/cong-trinh/de-chua-phan-cap',
                },{
                  title: 'Đê sông nội đồng',
                  path: '/cong-trinh/de-song-noi-dong',
                },{
                  title: 'Kè',
                  path: '/cong-trinh/ke',
                },{
                  title: 'Cống',
                  path: '/cong-trinh/cong',
                }
              ]
            },{
              title: 'Công trình phụ trợ',
              children: [
                {
                  title: 'Tuyến đập hồ',
                  path: '/cong-trinh/de-song',
                },{
                  title: 'Cây chắn sóng',
                  path: '/cong-trinh/de-bien',
                },{
                  title: 'Đê bối',
                  path: '/cong-trinh/de-boi',
                },{
                  title: 'Đầm ao ven đê',
                  path: '/cong-trinh/de-chua-phan-cap',
                },{
                  title: 'Điếm canh đê',
                  path: '/cong-trinh/de-song-noi-dong',
                },{
                  title: 'Cửa khẩu',
                  path: '/cong-trinh/ke',
                },{
                  title: 'Kho vật tư',
                  path: '/cong-trinh/cong',
                },{
                  title: 'Âu thuyền',
                  path: '/cong-trinh/de-chua-phan-cap',
                },{
                  title: 'Trạm bơm tưới',
                  path: '/cong-trinh/de-song-noi-dong',
                },{
                  title: 'Trạm bơm tiêu',
                  path: '/cong-trinh/ke',
                },{
                  title: 'Trạm bơm kết hợp',
                  path: '/cong-trinh/cong',
                },{
                  title: 'Phà',
                  path: '/cong-trinh/de-song-noi-dong',
                },{
                  title: 'Cột thủy trí',
                  path: '/cong-trinh/ke',
                },{
                  title: 'Biển báo khác',
                  path: '/cong-trinh/cong',
                }
              ]
            },{
                title: 'Trọng điểm chống lụt, bão',
                children: [
                  {
                    title: 'Kim Sơn',
                    path: '/cong-trinh/de-song',
                  },{
                    title: 'Yên Khánh',
                    path: '/cong-trinh/de-bien',
                  },{
                    title: 'Yên Mô',
                    path: '/cong-trinh/de-boi',
                  },{
                    title: 'Tam Điệp',
                    path: '/cong-trinh/de-chua-phan-cap',
                  },{
                    title: 'Ninh Bình',
                    path: '/cong-trinh/de-song-noi-dong',
                  },{
                    title: 'Hoa Lư',
                    path: '/cong-trinh/ke',
                  },{
                    title: 'Nho Quan',
                    path: '/cong-trinh/cong',
                  }
                ]
              },{
                title: 'Vật tư chống lụt, bão',
                path: '/quan-trac/nuoc-mat'
              }
          ]
        },{
          title: 'Công trình phân chậm lũ',
          children: [
            {
              title: 'Tràn Lạc Khoái',
              path: '/cong-trinh/tran-lac-khoai',
            },{
              title: 'Cống Mai Phương - Địch Lộng',
              path: '/cong-trinh/cong-mai-phuong-dich-long',
            }
          ]
        }
      ]
    },
    {
      title: 'TRẠM QUAN TRẮC',
      children: [
        {
          title: 'Trạm khí tượng',
          path: '/cong-trinh/de-song',
        },
        {
          title: 'Trạm đo mưa',
          path: '/cong-trinh/de-song',
        },
        {
          title: 'Trạm thủy văn',
          path: '/cong-trinh/de-song',
        },
        {
          title: 'Quan trắc công trình',
          path: '/cong-trinh/de-song',
        }
      ]
    },
    {
      title: 'DỰ BÁO CẢNH BÁO LŨ',
      children: [
        {
          title: 'Lượng mưa dự báo',
          path: '/quan-trac/nuoc-mat'
        },
        {
          title: 'Mực nước dự báo',
          path: '/quan-trac/nuoc-mat'
        }
      ]
    },
    {
      title: 'BẢN ĐỒ RỦI RO THIÊN TAI',
      children: [
        {
          title: 'Bão, áp thấp nhiệt',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Lũ, ngập lụt',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Mưa lớn',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Hạn hán',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Xâm nhập mặn',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Rét hại',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Nắng nóng',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Sạt lở đất',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Lốc',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Sét',
          path: '/giay-phep/quan-ly'
        },{
          title: 'Mưa đá',
          path: '/giay-phep/quan-ly'
        }
      ]
    },{
      title: 'PHƯƠNG ÁN ĐIỀU HÀNH CHỐNG LŨ',
      children: [
        {
          title: 'Bản đồ dân cư, cơ sở hạ tầng',
          path: '/A'
        },
        {
          title: 'Bản đồ ngập lụt',
          path: '/bao-cao-bieu-mau'
        },
        {
          title: 'Thiệt hại do ngập lụt',
          path: '/tru-luong-nuoc'
        },
        {
          title: 'Phương án vận hành công trình',
          path: '/tru-luong-nuoc'
        },
        {
          title: 'Phương án sơ tán dân',
          path: '/tru-luong-nuoc'
        }
      ]
    },
    {
      title: 'HƯỚNG DẪN SỬ DỤNG',
      path: 'huong-dan-su-dung'
    },
    {
      title: 'LIÊN HỆ',
      path: 'huong-dan-su-dung'
    }
  ]
}

export default navigation
