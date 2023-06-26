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
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'CƠ QUAN QUẢN LÝ',
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
    }
  ]
}

export default navigation
