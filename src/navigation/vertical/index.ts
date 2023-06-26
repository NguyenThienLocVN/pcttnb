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
      title: 'Trang chủ',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'CÔNG TRÌNH CHỐNG LŨ'
    },
    {
      title: 'Đê, kè cống',
      icon: ConstructionIcon,
      children: [
        {
          icon: CircleOutline,
          title: 'Đê sông',
          path: '/cong-trinh/de-song',
        },{
          icon: CircleOutline,
          title: 'Đê biển',
          path: '/cong-trinh/de-bien',
        },{
          icon: CircleOutline,
          title: 'Đê bối',
          path: '/cong-trinh/de-boi',
        },{
          icon: CircleOutline,
          title: 'Đê chưa được phân cấp',
          path: '/cong-trinh/de-chua-phan-cap',
        },{
          icon: CircleOutline,
          title: 'Đê sông nội đồng',
          path: '/cong-trinh/de-song-noi-dong',
        },{
          icon: CircleOutline,
          title: 'Kè',
          path: '/cong-trinh/ke',
        },{
          icon: CircleOutline,
          title: 'Cống',
          path: '/cong-trinh/cong',
        }
      ]
    },{
      title: 'Công trình phụ trợ',
      icon: Factory,
      children: [
        {
          icon: CircleOutline,
          title: 'Tuyến đập hồ',
          path: '/cong-trinh/de-song',
        },{
          icon: CircleOutline,
          title: 'Cây chắn sóng',
          path: '/cong-trinh/de-bien',
        },{
          icon: CircleOutline,
          title: 'Đê bối',
          path: '/cong-trinh/de-boi',
        },{
          icon: CircleOutline,
          title: 'Đầm ao ven đê',
          path: '/cong-trinh/de-chua-phan-cap',
        },{
          icon: CircleOutline,
          title: 'Điếm canh đê',
          path: '/cong-trinh/de-song-noi-dong',
        },{
          icon: CircleOutline,
          title: 'Cửa khẩu',
          path: '/cong-trinh/ke',
        },{
          icon: CircleOutline,
          title: 'Kho vật tư',
          path: '/cong-trinh/cong',
        },{
          icon: CircleOutline,
          title: 'Âu thuyền',
          path: '/cong-trinh/de-chua-phan-cap',
        },{
          icon: CircleOutline,
          title: 'Trạm bơm tưới',
          path: '/cong-trinh/de-song-noi-dong',
        },{
          icon: CircleOutline,
          title: 'Trạm bơm tiêu',
          path: '/cong-trinh/ke',
        },{
          icon: CircleOutline,
          title: 'Trạm bơm kết hợp',
          path: '/cong-trinh/cong',
        },{
          icon: CircleOutline,
          title: 'Phà',
          path: '/cong-trinh/de-song-noi-dong',
        },{
          icon: CircleOutline,
          title: 'Cột thủy trí',
          path: '/cong-trinh/ke',
        },{
          icon: CircleOutline,
          title: 'Biển báo khác',
          path: '/cong-trinh/cong',
        }
      ]
    },{
      title: 'Trọng điểm chống lụt, bão',
      icon: TsunamiIcon,
      children: [
        {
          icon: CircleOutline,
          title: 'Kim Sơn',
          path: '/cong-trinh/de-song',
        },{
          icon: CircleOutline,
          title: 'Yên Khánh',
          path: '/cong-trinh/de-bien',
        },{
          icon: CircleOutline,
          title: 'Yên Mô',
          path: '/cong-trinh/de-boi',
        },{
          icon: CircleOutline,
          title: 'Tam Điệp',
          path: '/cong-trinh/de-chua-phan-cap',
        },{
          icon: CircleOutline,
          title: 'Ninh Bình',
          path: '/cong-trinh/de-song-noi-dong',
        },{
          icon: CircleOutline,
          title: 'Hoa Lư',
          path: '/cong-trinh/ke',
        },{
          icon: CircleOutline,
          title: 'Nho Quan',
          path: '/cong-trinh/cong',
        }
      ]
    },{
      title: 'Vật tư chống lụt, bão',
      icon: TsunamiIcon,
      path: '/quan-trac/nuoc-mat'
    },{
      sectionTitle: 'CÔNG TRÌNH PHÂN CHẬM LŨ'
    },{
      title: 'Tràn lạc khoái',
      icon: TsunamiIcon,
      children: [
        {
          icon: CircleOutline,
          title: 'Kim Sơn',
          path: '/cong-trinh/de-song',
        }
      ]
    },{
      title: 'Cống Mai Phương - Địch Lộng',
      icon: TsunamiIcon,
      children: [
        {
          icon: CircleOutline,
          title: 'Kim Sơn',
          path: '/cong-trinh/de-song',
        }
      ]
    },{
      sectionTitle: 'TRẠM QUAN TRẮC'
    },{
      title: 'Trạm khí tượng',
      icon: TsunamiIcon,
      path: '/cong-trinh/de-song',
    },{
      title: 'Trạm đo mưa',
      icon: TsunamiIcon,
      path: '/cong-trinh/de-song',
    },{
      title: 'Trạm thủy văn',
      icon: TsunamiIcon,
      path: '/cong-trinh/de-song',
    },{
      title: 'Quan trắc công trình',
      icon: TsunamiIcon,
      path: '/cong-trinh/de-song',
    },{
      sectionTitle: 'DỰ BÁO CẢNH BÁO LŨ'
    },{
      title: 'Lượng mưa dự báo',
      icon: DisplaySettingsIcon,
      path: '/quan-trac/nuoc-mat'
    },
    {
      title: 'Mực nước dự báo',
      icon: DisplaySettingsIcon,
      path: '/quan-trac/nuoc-mat'
    },{
      sectionTitle: 'BẢN ĐỒ RỦI RO THIÊN TAI'
    },{
      title: 'Bão, áp thấp nhiệt đới',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Lũ, ngập lụt',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Mưa lớn',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Hạn hán',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Xâm nhập mặn',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Rét hại',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Nắng nóng',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Sạt lở đất',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Lốc',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Sét',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Mưa đá',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      title: 'Cháy rừng do tự nhiên',
      icon: NoteText,
      path: '/giay-phep/quan-ly'
    },{
      sectionTitle: 'PHƯƠNG ÁN ĐIỀU HÀNH CHỐNG LŨ'
    },{
      title: 'Bản đồ dân cư, cơ sở hạ tầng',
      icon: Information,
      path: '/'
    },
    {
      title: 'Bản đồ ngập lụt',
      icon: Information,
      path: '/bao-cao-bieu-mau'
    },
    {
      title: 'Thiệt hại do ngập lụt',
      icon: WaterIcon,
      path: '/tru-luong-nuoc'
    },
    {
      title: 'Phương án vận hành công trình',
      icon: WaterIcon,
      path: '/tru-luong-nuoc'
    },
    {
      title: 'Phương án sơ tán dân',
      icon: WaterIcon,
      path: '/tru-luong-nuoc'
    },{
      title: 'Sông',
      icon: WaterIcon,
      path: '/song'
    },
    {
      title: 'Nội dung khác',
      icon: More,
      path: 'noi-dung-khac'
    },
    {
      title: 'Hướng dẫn sử dụng',
      icon: TagOutline,
      path: 'huong-dan-su-dung'
    },
    {
      sectionTitle: 'Quản lý'
    },
    {
      title: 'Tài khoản & Quyền hạn',
      icon: AccountCogOutline,
      path: '/quan-ly/tai-khoan-va-quyen-han'
    },
    {
      title: 'Trang truy cập',
      icon: Tv,
      path: '/quan-ly/trang-truy-cap'
    },
  ]
}

export default navigation
