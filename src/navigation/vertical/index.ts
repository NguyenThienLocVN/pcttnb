// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import Factory from 'mdi-material-ui/Factory';
import NoteText from 'mdi-material-ui/NoteText';
import ChartSankey from 'mdi-material-ui/ChartSankey';
import Information from 'mdi-material-ui/Information';
import More from 'mdi-material-ui/More';
import TagOutline from 'mdi-material-ui/TagOutline';
import CircleOutline from 'mdi-material-ui/CircleOutline';
import WaterIcon from '@mui/icons-material/Water';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ConstructionIcon from '@mui/icons-material/Construction';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import { Tv } from "@mui/icons-material";

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'TRANG CHỦ',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'CƠ QUAN QUẢN LÝ',
      // icon: ConstructionIcon,
      children: [
        {
          icon: CircleOutline,
          title: 'Ban chỉ huy PCTT & TKCN tỉnh',
          path: '/cong-trinh/de-song',
        },{
          icon: CircleOutline,
          title: 'Ban chỉ huy PCTT & TKCN huyện',
          path: '/cong-trinh/de-bien',
        },{
          icon: CircleOutline,
          title: 'Chi cục thủy lợi',
          path: '/cong-trinh/de-boi',
        },{
          icon: CircleOutline,
          title: 'Hạt quản lý đê',
          path: '/cong-trinh/de-chua-phan-cap',
        }
      ]
    },
    {
      title: 'CÔNG TRÌNH CHỐNG LŨ',
      icon: ConstructionIcon,
      children: [
        {
          icon: CircleOutline,
          title: 'Tiêu chuẩn chống lũ',
          path: '/cong-trinh/de-song',
        },{
          icon: CircleOutline,
          title: 'Công trình chống lũ',
          path: '/cong-trinh/de-bien',
        },{
          icon: CircleOutline,
          title: 'Công trình phân chậm lũ',
          path: '/cong-trinh/de-boi',
        }
      ]
    },
    // {
    //   title: 'Công trình phụ trợ',
    //   icon: Factory,
    //   children: [
    //     {
    //       icon: CircleOutline,
    //       title: 'Tuyến đập hồ',
    //       path: '/cong-trinh/de-song',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Cây chắn sóng',
    //       path: '/cong-trinh/de-bien',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Đê bối',
    //       path: '/cong-trinh/de-boi',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Đầm ao ven đê',
    //       path: '/cong-trinh/de-chua-phan-cap',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Điếm canh đê',
    //       path: '/cong-trinh/de-song-noi-dong',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Cửa khẩu',
    //       path: '/cong-trinh/ke',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Kho vật tư',
    //       path: '/cong-trinh/cong',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Âu thuyền',
    //       path: '/cong-trinh/de-chua-phan-cap',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Trạm bơm tưới',
    //       path: '/cong-trinh/de-song-noi-dong',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Trạm bơm tiêu',
    //       path: '/cong-trinh/ke',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Trạm bơm kết hợp',
    //       path: '/cong-trinh/cong',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Phà',
    //       path: '/cong-trinh/de-song-noi-dong',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Cột thủy trí',
    //       path: '/cong-trinh/ke',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Biển báo khác',
    //       path: '/cong-trinh/cong',
    //     }
    //   ]
    // },{
    //   title: 'Trọng điểm chống lụt, bão',
    //   icon: TsunamiIcon,
    //   children: [
    //     {
    //       icon: CircleOutline,
    //       title: 'Kim Sơn',
    //       path: '/cong-trinh/de-song',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Yên Khánh',
    //       path: '/cong-trinh/de-bien',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Yên Mô',
    //       path: '/cong-trinh/de-boi',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Tam Điệp',
    //       path: '/cong-trinh/de-chua-phan-cap',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Ninh Bình',
    //       path: '/cong-trinh/de-song-noi-dong',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Hoa Lư',
    //       path: '/cong-trinh/ke',
    //     },{
    //       icon: CircleOutline,
    //       title: 'Nho Quan',
    //       path: '/cong-trinh/cong',
    //     }
    //   ]
    // },{
    //   title: 'Vật tư chống lụt, bão',
    //   icon: TsunamiIcon,
    //   path: '/quan-trac/nuoc-mat'
    // },
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
      icon: TagOutline,
      path: 'huong-dan-su-dung'
    },
    {
      title: 'LIÊN HỆ',
      icon: TagOutline,
      path: 'huong-dan-su-dung'
    },
    // {
    //   title: 'Sông',
    //   icon: WaterIcon,
    //   path: '/song'
    // },
    // {
    //   sectionTitle: 'Quản lý'
    // },
    // {
    //   title: 'Tài khoản & Quyền hạn',
    //   icon: AccountCogOutline,
    //   path: '/quan-ly/tai-khoan-va-quyen-han'
    // },
    // {
    //   title: 'Trang truy cập',
    //   icon: Tv,
    //   path: '/quan-ly/trang-truy-cap'
    // },
  ]
}

export default navigation
