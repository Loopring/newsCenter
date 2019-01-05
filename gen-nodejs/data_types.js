//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
ttypes.ErrorCode = {
  'PARAMETER_ERROR' : 10001,
  'DATABASE_CONNECT_ERROR' : 10002,
  'DATABASE_QUERY_ERROR' : 10002,
  'INDEX_CACULATE_ERROR' : 10003,
  'BUSINESS_ERROR' : 10004,
  'NOT_SUPPORT_LANGUAGE' : 10005
};
ttypes.Currency = {
  'ALL_CURRENCY' : 0,
  'BTC' : 1,
  'ETH' : 2,
  'LRC' : 3
};
var NewsItem = module.exports.NewsItem = function(args) {
  this.uuid = null;
  this.title = null;
  this.content = null;
  this.category = null;
  this.url = null;
  this.publishTime = null;
  this.source = null;
  this.author = null;
  this.imageUrl = null;
  this.bullIndex = null;
  this.bearIndex = null;
  this.forwardNum = null;
  this.language = null;
  this.currency = null;
  this.readNum = null;
  if (args) {
    if (args.uuid !== undefined && args.uuid !== null) {
      this.uuid = args.uuid;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = args.content;
    }
    if (args.category !== undefined && args.category !== null) {
      this.category = args.category;
    }
    if (args.url !== undefined && args.url !== null) {
      this.url = args.url;
    }
    if (args.publishTime !== undefined && args.publishTime !== null) {
      this.publishTime = args.publishTime;
    }
    if (args.source !== undefined && args.source !== null) {
      this.source = args.source;
    }
    if (args.author !== undefined && args.author !== null) {
      this.author = args.author;
    }
    if (args.imageUrl !== undefined && args.imageUrl !== null) {
      this.imageUrl = args.imageUrl;
    }
    if (args.bullIndex !== undefined && args.bullIndex !== null) {
      this.bullIndex = args.bullIndex;
    }
    if (args.bearIndex !== undefined && args.bearIndex !== null) {
      this.bearIndex = args.bearIndex;
    }
    if (args.forwardNum !== undefined && args.forwardNum !== null) {
      this.forwardNum = args.forwardNum;
    }
    if (args.language !== undefined && args.language !== null) {
      this.language = args.language;
    }
    if (args.currency !== undefined && args.currency !== null) {
      this.currency = args.currency;
    }
    if (args.readNum !== undefined && args.readNum !== null) {
      this.readNum = args.readNum;
    }
  }
};
NewsItem.prototype = {};
NewsItem.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.content = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.category = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.url = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.publishTime = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.source = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.author = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.imageUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I64) {
        this.bullIndex = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.I64) {
        this.bearIndex = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.I64) {
        this.forwardNum = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.language = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.STRING) {
        this.currency = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.I64) {
        this.readNum = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NewsItem.prototype.write = function(output) {
  output.writeStructBegin('NewsItem');
  if (this.uuid !== null && this.uuid !== undefined) {
    output.writeFieldBegin('uuid', Thrift.Type.STRING, 1);
    output.writeString(this.uuid);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 2);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRING, 3);
    output.writeString(this.content);
    output.writeFieldEnd();
  }
  if (this.category !== null && this.category !== undefined) {
    output.writeFieldBegin('category', Thrift.Type.I64, 4);
    output.writeI64(this.category);
    output.writeFieldEnd();
  }
  if (this.url !== null && this.url !== undefined) {
    output.writeFieldBegin('url', Thrift.Type.STRING, 5);
    output.writeString(this.url);
    output.writeFieldEnd();
  }
  if (this.publishTime !== null && this.publishTime !== undefined) {
    output.writeFieldBegin('publishTime', Thrift.Type.STRING, 6);
    output.writeString(this.publishTime);
    output.writeFieldEnd();
  }
  if (this.source !== null && this.source !== undefined) {
    output.writeFieldBegin('source', Thrift.Type.STRING, 7);
    output.writeString(this.source);
    output.writeFieldEnd();
  }
  if (this.author !== null && this.author !== undefined) {
    output.writeFieldBegin('author', Thrift.Type.STRING, 8);
    output.writeString(this.author);
    output.writeFieldEnd();
  }
  if (this.imageUrl !== null && this.imageUrl !== undefined) {
    output.writeFieldBegin('imageUrl', Thrift.Type.STRING, 9);
    output.writeString(this.imageUrl);
    output.writeFieldEnd();
  }
  if (this.bullIndex !== null && this.bullIndex !== undefined) {
    output.writeFieldBegin('bullIndex', Thrift.Type.I64, 10);
    output.writeI64(this.bullIndex);
    output.writeFieldEnd();
  }
  if (this.bearIndex !== null && this.bearIndex !== undefined) {
    output.writeFieldBegin('bearIndex', Thrift.Type.I64, 11);
    output.writeI64(this.bearIndex);
    output.writeFieldEnd();
  }
  if (this.forwardNum !== null && this.forwardNum !== undefined) {
    output.writeFieldBegin('forwardNum', Thrift.Type.I64, 12);
    output.writeI64(this.forwardNum);
    output.writeFieldEnd();
  }
  if (this.language !== null && this.language !== undefined) {
    output.writeFieldBegin('language', Thrift.Type.STRING, 13);
    output.writeString(this.language);
    output.writeFieldEnd();
  }
  if (this.currency !== null && this.currency !== undefined) {
    output.writeFieldBegin('currency', Thrift.Type.STRING, 14);
    output.writeString(this.currency);
    output.writeFieldEnd();
  }
  if (this.readNum !== null && this.readNum !== undefined) {
    output.writeFieldBegin('readNum', Thrift.Type.I64, 15);
    output.writeI64(this.readNum);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NewsCollection = module.exports.NewsCollection = function(args) {
  this.data = null;
  this.pageIndex = null;
  this.pageSize = null;
  this.total = null;
  if (args) {
    if (args.data !== undefined && args.data !== null) {
      this.data = Thrift.copyList(args.data, [ttypes.NewsItem]);
    }
    if (args.pageIndex !== undefined && args.pageIndex !== null) {
      this.pageIndex = args.pageIndex;
    }
    if (args.pageSize !== undefined && args.pageSize !== null) {
      this.pageSize = args.pageSize;
    }
    if (args.total !== undefined && args.total !== null) {
      this.total = args.total;
    }
  }
};
NewsCollection.prototype = {};
NewsCollection.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.data = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.NewsItem();
          elem6.read(input);
          this.data.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.pageIndex = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.pageSize = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.total = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NewsCollection.prototype.write = function(output) {
  output.writeStructBegin('NewsCollection');
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.data.length);
    for (var iter7 in this.data)
    {
      if (this.data.hasOwnProperty(iter7))
      {
        iter7 = this.data[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.pageIndex !== null && this.pageIndex !== undefined) {
    output.writeFieldBegin('pageIndex', Thrift.Type.I64, 2);
    output.writeI64(this.pageIndex);
    output.writeFieldEnd();
  }
  if (this.pageSize !== null && this.pageSize !== undefined) {
    output.writeFieldBegin('pageSize', Thrift.Type.I64, 3);
    output.writeI64(this.pageSize);
    output.writeFieldEnd();
  }
  if (this.total !== null && this.total !== undefined) {
    output.writeFieldBegin('total', Thrift.Type.I64, 4);
    output.writeI64(this.total);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IndexResponse = module.exports.IndexResponse = function(args) {
  this.uuid = null;
  this.bullIndex = null;
  this.bearIndex = null;
  this.forwardNum = null;
  this.readNum = null;
  if (args) {
    if (args.uuid !== undefined && args.uuid !== null) {
      this.uuid = args.uuid;
    }
    if (args.bullIndex !== undefined && args.bullIndex !== null) {
      this.bullIndex = args.bullIndex;
    }
    if (args.bearIndex !== undefined && args.bearIndex !== null) {
      this.bearIndex = args.bearIndex;
    }
    if (args.forwardNum !== undefined && args.forwardNum !== null) {
      this.forwardNum = args.forwardNum;
    }
    if (args.readNum !== undefined && args.readNum !== null) {
      this.readNum = args.readNum;
    }
  }
};
IndexResponse.prototype = {};
IndexResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.bullIndex = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.bearIndex = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.forwardNum = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.readNum = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IndexResponse.prototype.write = function(output) {
  output.writeStructBegin('IndexResponse');
  if (this.uuid !== null && this.uuid !== undefined) {
    output.writeFieldBegin('uuid', Thrift.Type.STRING, 1);
    output.writeString(this.uuid);
    output.writeFieldEnd();
  }
  if (this.bullIndex !== null && this.bullIndex !== undefined) {
    output.writeFieldBegin('bullIndex', Thrift.Type.I64, 2);
    output.writeI64(this.bullIndex);
    output.writeFieldEnd();
  }
  if (this.bearIndex !== null && this.bearIndex !== undefined) {
    output.writeFieldBegin('bearIndex', Thrift.Type.I64, 3);
    output.writeI64(this.bearIndex);
    output.writeFieldEnd();
  }
  if (this.forwardNum !== null && this.forwardNum !== undefined) {
    output.writeFieldBegin('forwardNum', Thrift.Type.I64, 4);
    output.writeI64(this.forwardNum);
    output.writeFieldEnd();
  }
  if (this.readNum !== null && this.readNum !== undefined) {
    output.writeFieldBegin('readNum', Thrift.Type.I64, 5);
    output.writeI64(this.readNum);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.NEWS_INFO = 'news_info';
ttypes.ALL_CURRENCY = 'ALL_CURRENCY';
ttypes.INFORMATION = 'information';
ttypes.FLASH = 'flash';
ttypes.BULL_INDEX_COLUMN = 'bull_index';
ttypes.BEAR_INDEX_COLUMN = 'bear_index';
ttypes.FORWARD_NUM_COLUMN = 'forward_num';
ttypes.READ_NUM_COLUMN = 'read_num';
ttypes.S_CHINESE = 'zh-Hans';
ttypes.T_CHINENE = 'zh-Hant';
ttypes.ENGLISH = 'en';
ttypes.MAX_PAGE_SIZE = 100;
